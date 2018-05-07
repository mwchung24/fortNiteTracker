import React from 'react';

export default class UserStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      userUsername: '',
      userPlatform: '',
    };
  }

  render() {
    let user = this.props.userStats;
    let userStats = this.props.userStats.stats;
    console.log(userStats);
    return (
      <section>
        <div className="statsHeader">
          <div className="userId">{user.id}</div>
          <div className="userUsername">{user.username}</div>
          <div className="userPlatform">{user.platform}</div>
        </div>
      </section>
    );
  }
}
