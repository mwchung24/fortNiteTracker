import React from 'react';

const apiKey = 'AIzaSyCewOm0o-G3D3mYnbJ5WClVdZLcUGt6AIU';
const result = 6;

let finalURL = '';

class Youtube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.getYouTubeHandle = this.getYouTubeHandle.bind(this);
  }

  getYouTubeHandle(username) {
    if(username === 'ninja') {
      return 'ninjashyper';
    } else if(username === 'summitoneg') {
      return 'summit1g';
    } else if(username === 'tsm_myth') {
      return 'myth';
    }
    else return username;
  }

  handleClick() {
    if(this.props.username) {
      let username = this.props.username;
      let ytHandle = this.getYouTubeHandle(username);
      let getChannelId = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forUsername=${ytHandle}&part=id`;
      fetch(getChannelId)
        .then((response) => response.json())
        .then((responseJSON) => {
          if(responseJSON.items.length > 0) {
            let userId = responseJSON.items[0].id;
            finalURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${userId}&part=snippet,id&order=date&maxResults=${result}`;
            console.log(finalURL);
            fetch(finalURL)
            .then((response) => response.json())
            .then((responseJSON) => {
              const videoIds = responseJSON.items.map(video => "https://www.youtube.com/embed/"+video.id.videoId);
              this.setState({
                videoIds: videoIds
              });
            })
            .catch((error) => {
              console.error(error);
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    if (this.props.clicked){
      let videos = this.state.videoIds.map((link, i) => {
        return <iframe width="560" height="315" key={i} src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>;
        });
        return (
          <div className="youtubeBody">
            <button className="getClipsButton" onClick={this.handleClick}>Get YouTube Videos</button>
            <div className="youtubeClips">
              {videos}
            </div>
          </div>
        );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Youtube;
