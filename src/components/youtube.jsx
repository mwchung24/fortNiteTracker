import React from 'react';

// youtube api key
// key=API_KEY
// apikey: AIzaSyCewOm0o-G3D3mYnbJ5WClVdZLcUGt6AIU
// clientID: 585329906733-eg2v0pdkn33r1obend6h1dabqdmvfga1.apps.googleusercontent.com
// secret key: 5zkIr3-rB347DMjML3Q0lrEA

const apiKey = 'AIzaSyCewOm0o-G3D3mYnbJ5WClVdZLcUGt6AIU';
const channelId = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 3;

let finalURL = '';

class Youtube extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIds: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.props.username) {
      let username = this.props.username;
      // let username = 'ninjashyper';
      let getChannelId = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forUsername=${username}&part=id`;
      console.log(getChannelId);
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
          <div>
            <button onClick={this.handleClick}>Get YouTube Videos</button>
            {videos}
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
