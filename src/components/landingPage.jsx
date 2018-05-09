import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import UserStats from './userStats';
import Youtube from './youtube';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      platform: '',
      usernameError: '',
      platformError: '',
      userStats: {},
      clicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.currentTarget.value});
  }

  handleChangeDropDown(e) {
    this.setState({platform: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.username) {
      this.setState({usernameError: 'Enter Epic Username'});
    } else {
      this.setState({usernameError: ''});
    }
    if(!this.state.platform) {
      this.setState({platformError: 'Select Platform'});
    } else {
      this.setState({platformError: ''});
    }

    if(this.state.username && this.state.platform) {
      let platform;
      if(this.state.platform === 'Computer') {
        platform = 'pc';
      } else if(this.state.platform === 'Xbox Live') {
        platform = 'xbl';
      } else if(this.state.platform === 'PlayStation Network') {
        platform = 'psn';
      }

      $.ajax({
        method: 'POST',
        url: '/playerStats',
        data: {
          username: this.state.username,
          platform: platform,
        }
      }).then((result) => {
        this.setState({userStats: result, clicked: true});
      });
    }
  }

  render() {
    let usernameError;
    if(this.state.usernameError) {
      usernameError = this.state.usernameError;
    }

    let platformError;
    if(this.state.platformError) {
      platformError = this.state.platformError;
    }

    return (
      <section>
        <Header/>
        <div className="fortniteBody">
          <div className="explanation">
            This stat tracker is for recreational use only.  I have made
            an application that communicates with the FORTNITE API to
            retrieve user stats.  You must enter the EPIC username and the
            platform to receive accurate data.
            <br/>
            <br/>
            Using the YouTube API, I will provide some videos of popular
            FORTNITE streamers.
          </div>
          <img className="fortnitePicture" src="static/images/fortnitepic.jpg"></img>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form1">
              <div className="error">{usernameError}</div>
              <div>EPIC Username</div>
              <input placeholder="ie: Ninja" onChange={this.handleChange} className="usernameInput"></input>
            </div>
            <div className="form2">
              <div className="error">{platformError}</div>
              <div>Select Plaform</div>
              <select defaultValue="ie: Computer" onChange={this.handleChangeDropDown} className="platformInput">
                <option disabled="true">ie: Computer</option>
                <option>Computer</option>
                <option>Xbox Live</option>
                <option>PlayStation Network</option>
              </select>
            </div>
            <button onClick={this.handleSubmit} className="landingSubmit">Submit</button>
          </form>
          <UserStats
            userStats = {this.state.userStats}
          />
          <Youtube
            username = {this.state.username}
            clicked = {this.state.clicked}
          />
        </div>
      </section>
    );
  }
}
