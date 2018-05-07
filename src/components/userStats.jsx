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
    if(user && userStats) {
      return (
        <section>
          <div className="statsHeader">
            <div className="userId">{user.id}</div>
            <div className="userUsername">{user.username}</div>
            <div className="userPlatform">{user.platform}</div>
          </div>
          <div className="currentSeason">
            <div>Current Season</div>
            <div className="currentSeasonSolo">
              <div>SOLO</div>
              <div>Score: {userStats.current_solo.score}</div>
              <div>Matches: {userStats.current_solo.matches}</div>
              <div>Score per Match: {userStats.current_solo.score_per_match}</div>
              <div>Wins: {userStats.current_solo.wins}</div>
              <div>Kills: {userStats.current_solo.kills}</div>
              <div>Kills per Match {userStats.current_solo.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.current_solo.kd}</div>
              <div>Top 3 Finish: {userStats.current_solo.top_3}</div>
              <div>Top 5 Finish: {userStats.current_solo.top_5}</div>
              <div>Top 6 Finish: {userStats.current_solo.top_6}</div>
              <div>Top 12 Finish: {userStats.current_solo.top_12}</div>
              <div>Top 25 Finish: {userStats.current_solo.top_25}</div>
            </div>
            <div className="currentSeasonDuo">
              <div>DUO</div>
              <div>Score: {userStats.current_duo.score}</div>
              <div>Matches: {userStats.current_duo.matches}</div>
              <div>Score per Match: {userStats.current_duo.score_per_match}</div>
              <div>Wins: {userStats.current_duo.wins}</div>
              <div>Kills: {userStats.current_duo.kills}</div>
              <div>Kills per Match {userStats.current_duo.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.current_duo.kd}</div>
              <div>Top 3 Finish: {userStats.current_duo.top_3}</div>
              <div>Top 5 Finish: {userStats.current_duo.top_5}</div>
              <div>Top 6 Finish: {userStats.current_duo.top_6}</div>
              <div>Top 12 Finish: {userStats.current_duo.top_12}</div>
              <div>Top 25 Finish: {userStats.current_duo.top_25}</div>
            </div>
            <div className="currentSeasonSquad">
              <div>SQUAD</div>
              <div>Score: {userStats.current_squad.score}</div>
              <div>Matches: {userStats.current_squad.matches}</div>
              <div>Score per Match: {userStats.current_squad.score_per_match}</div>
              <div>Wins: {userStats.current_squad.wins}</div>
              <div>Kills: {userStats.current_squad.kills}</div>
              <div>Kills per Match {userStats.current_squad.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.current_squad.kd}</div>
              <div>Top 3 Finish: {userStats.current_squad.top_3}</div>
              <div>Top 5 Finish: {userStats.current_squad.top_5}</div>
              <div>Top 6 Finish: {userStats.current_squad.top_6}</div>
              <div>Top 12 Finish: {userStats.current_squad.top_12}</div>
              <div>Top 25 Finish: {userStats.current_squad.top_25}</div>
            </div>
          </div>
          <div className="allTime">
            <div>All Time</div>
            <div className="solo">
              <div>SOLO</div>
              <div>Score: {userStats.solo.score}</div>
              <div>Matches: {userStats.solo.matches}</div>
              <div>Score per Match: {userStats.solo.score_per_match}</div>
              <div>Wins: {userStats.solo.wins}</div>
              <div>Kills: {userStats.solo.kills}</div>
              <div>Kills per Match {userStats.solo.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.solo.kd}</div>
              <div>Top 3 Finish: {userStats.solo.top_3}</div>
              <div>Top 5 Finish: {userStats.solo.top_5}</div>
              <div>Top 6 Finish: {userStats.solo.top_6}</div>
              <div>Top 12 Finish: {userStats.solo.top_12}</div>
              <div>Top 25 Finish: {userStats.solo.top_25}</div>
            </div>
            <div className="duo">
              <div>DUO</div>
              <div>Score: {userStats.duo.score}</div>
              <div>Matches: {userStats.duo.matches}</div>
              <div>Score per Match: {userStats.duo.score_per_match}</div>
              <div>Wins: {userStats.duo.wins}</div>
              <div>Kills: {userStats.duo.kills}</div>
              <div>Kills per Match {userStats.duo.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.duo.kd}</div>
              <div>Top 3 Finish: {userStats.duo.top_3}</div>
              <div>Top 5 Finish: {userStats.duo.top_5}</div>
              <div>Top 6 Finish: {userStats.duo.top_6}</div>
              <div>Top 12 Finish: {userStats.duo.top_12}</div>
              <div>Top 25 Finish: {userStats.duo.top_25}</div>
            </div>
            <div className="squad">
              <div>SQUAD</div>
              <div>Score: {userStats.squad.score}</div>
              <div>Matches: {userStats.squad.matches}</div>
              <div>Score per Match: {userStats.squad.score_per_match}</div>
              <div>Wins: {userStats.squad.wins}</div>
              <div>Kills: {userStats.squad.kills}</div>
              <div>Kills per Match {userStats.squad.kills_per_match}</div>
              <div>Kill Death Ratio: {userStats.squad.kd}</div>
              <div>Top 3 Finish: {userStats.squad.top_3}</div>
              <div>Top 5 Finish: {userStats.squad.top_5}</div>
              <div>Top 6 Finish: {userStats.squad.top_6}</div>
              <div>Top 12 Finish: {userStats.squad.top_12}</div>
              <div>Top 25 Finish: {userStats.squad.top_25}</div>
            </div>
          </div>
          <div className="lifetime">
            <div>Life Time</div>
            <div>Score: {userStats.lifetime[6].Score}</div>
            <div>Matches Played: {userStats.lifetime[7]['Matches Played']}</div>
            <div>Wins: {userStats.lifetime[8].Wins}</div>
            <div>Win %: {userStats.lifetime[9]['Win%']}</div>
            <div>Kills: {userStats.lifetime[10].Kills}</div>
            <div>Kill Death Ratio: {userStats.lifetime[11]['K/d']}</div>
            <div>Top 3: {userStats.lifetime[2]['Top 3s']}</div>
            <div>Top 5: {userStats.lifetime[1]['Top 5s']}</div>
            <div>Top 6: {userStats.lifetime[3]['Top 6s']}</div>
            <div>Top 12: {userStats.lifetime[4]['Top 12s']}</div>
            <div>Top 25: {userStats.lifetime[5]['Top 25s']}</div>
          </div>
        </section>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}
