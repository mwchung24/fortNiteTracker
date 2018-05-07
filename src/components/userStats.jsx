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
        <section className="statBody">
          <div className="statsHeader">
            <div className="userId row">User ID: <div className="value">{user.id}</div></div>
            <div className="userUsername row">Username: <div className="value">{user.username}</div></div>
            <div className="userPlatform row">Platform: <div className="value">{user.platform}</div></div>
          </div>
          <div className="currentSeason">
            <div className="currentSeasonHead">Current Season</div>
            <div className="currentSeasonBody">
              <div className="currentSeasonSolo">
                <div className="subhead">SOLO</div>
                <div className="row">Score: <div className="value">{userStats.current_solo.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.current_solo.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.current_solo.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.current_solo.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.current_solo.kills}</div></div>
                <div className="row">Kills per Match: <div className="value">{userStats.current_solo.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.current_solo.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.current_solo.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.current_solo.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.current_solo.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.current_solo.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.current_solo.top_25}</div></div>
              </div>
              <div className="currentSeasonDuo">
                <div className="subhead">DUO</div>
                <div className="row">Score: <div className="value">{userStats.current_duo.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.current_duo.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.current_duo.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.current_duo.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.current_duo.kills}</div></div>
                <div className="row">Kills per Match: <div className="value">{userStats.current_duo.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.current_duo.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.current_duo.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.current_duo.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.current_duo.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.current_duo.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.current_duo.top_25}</div></div>
              </div>
              <div className="currentSeasonSquad">
                <div className="subhead">SQUAD</div>
                <div className="row">Score: <div className="value">{userStats.current_squad.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.current_squad.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.current_squad.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.current_squad.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.current_squad.kills}</div></div>
                <div className="row">Kills per Match <div className="value">{userStats.current_squad.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.current_squad.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.current_squad.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.current_squad.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.current_squad.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.current_squad.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.current_squad.top_25}</div></div>
              </div>
            </div>
          </div>
          <div className="allTime">
            <div className="allTimeHead">All Time</div>
            <div className="allTimeBody">
              <div className="solo">
                <div className="subhead">SOLO</div>
                <div className="row">Score: <div className="value">{userStats.solo.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.solo.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.solo.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.solo.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.solo.kills}</div></div>
                <div className="row">Kills per Match: <div className="value">{userStats.solo.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.solo.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.solo.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.solo.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.solo.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.solo.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.solo.top_25}</div></div>
              </div>
              <div className="duo">
                <div className="subhead">DUO</div>
                <div className="row">Score: <div className="value">{userStats.duo.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.duo.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.duo.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.duo.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.duo.kills}</div></div>
                <div className="row">Kills per Match: <div className="value">{userStats.duo.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.duo.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.duo.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.duo.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.duo.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.duo.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.duo.top_25}</div></div>
              </div>
              <div className="squad">
                <div className="subhead">SQUAD</div>
                <div className="row">Score: <div className="value">{userStats.squad.score}</div></div>
                <div className="row">Matches: <div className="value">{userStats.squad.matches}</div></div>
                <div className="row">Score per Match: <div className="value">{userStats.squad.score_per_match}</div></div>
                <div className="row">Wins: <div className="value">{userStats.squad.wins}</div></div>
                <div className="row">Kills: <div className="value">{userStats.squad.kills}</div></div>
                <div className="row">Kills per Match: <div className="value">{userStats.squad.kills_per_match}</div></div>
                <div className="row">Kill Death Ratio: <div className="value">{userStats.squad.kd}</div></div>
                <div className="row">Top 3 Finish: <div className="value">{userStats.squad.top_3}</div></div>
                <div className="row">Top 5 Finish: <div className="value">{userStats.squad.top_5}</div></div>
                <div className="row">Top 6 Finish: <div className="value">{userStats.squad.top_6}</div></div>
                <div className="row">Top 12 Finish: <div className="value">{userStats.squad.top_12}</div></div>
                <div className="row">Top 25 Finish: <div className="value">{userStats.squad.top_25}</div></div>
              </div>
            </div>
          </div>
          <div className="lifetime">
            <div className="lifetimeHead">Life Time</div>
            <div className="row">Score: <div className="value">{userStats.lifetime[6].Score}</div></div>
            <div className="row">Matches Played: <div className="value">{userStats.lifetime[7]['Matches Played']}</div></div>
            <div className="row">Wins: <div className="value">{userStats.lifetime[8].Wins}</div></div>
            <div className="row">Win %: <div className="value">{userStats.lifetime[9]['Win%']}</div></div>
            <div className="row">Kills: <div className="value">{userStats.lifetime[10].Kills}</div></div>
            <div className="row">Kill Death Ratio: <div className="value">{userStats.lifetime[11]['K/d']}</div></div>
            <div className="row">Top 3: <div className="value">{userStats.lifetime[2]['Top 3s']}</div></div>
            <div className="row">Top 5: <div className="value">{userStats.lifetime[1]['Top 5s']}</div></div>
            <div className="row">Top 6: <div className="value">{userStats.lifetime[3]['Top 6s']}</div></div>
            <div className="row">Top 12: <div className="value">{userStats.lifetime[4]['Top 12s']}</div></div>
            <div className="row">Top 25: <div className="value">{userStats.lifetime[5]['Top 25s']}</div></div>
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
