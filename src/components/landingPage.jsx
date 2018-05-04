import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      platform: '',
      usernameError: '',
      platformError: '',
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
        method: 'GET',
        url: '/playerStats',
        data: {
          username: this.state.username,
          platform: platform,
        }
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
        <form onSubmit={this.handleSubmit} className="form">
          <div>{usernameError}</div>
          <input placeholder="Epic Username" onChange={this.handleChange} className="usernameInput"></input>
          <div>{platformError}</div>
          <select defaultValue="Select Platform" onChange={this.handleChangeDropDown} className="platformInput">
            <option disabled="true">Select Platform</option>
            <option>Computer</option>
            <option>Xbox Live</option>
            <option>PlayStation Network</option>
          </select>
          <button onClick={this.handleSubmit} className="landingSubmit">Submit</button>
        </form>
      </section>
    );
  }
}
