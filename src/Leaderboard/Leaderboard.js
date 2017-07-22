import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {db} from '../firebase';

import './Leaderboard.css';

class Leaderboard extends Component {
  componentWillMount() {
    this.state = {
      isLoading: true
    };
    db.ref('/scores')
      .once('value')
      .then((snapshot) => {
        const topScores = this.calculateTopScores(snapshot.val());
        this.setState({topScores, isLoading: false});
      });
  }
  calculateTopScores(scores) {
    const submissions = Object.values(scores);
    const highScoresByTeam = {};
    submissions.forEach((submission) => {
      if (highScoresByTeam[submission.teamName]) {
        highScoresByTeam[submission.teamName] = (highScoresByTeam[submission.teamName] >= submission.accuracy)
          ? highScoresByTeam[submission.teamName]
          : submission.accuracy;
      } else {
        highScoresByTeam[submission.teamName] = submission.accuracy;
      }
    });
    let index = 1;
    return Object.values(highScoresByTeam).sort().reverse().map((score) => {
      const result = (<div key={index} className="TopScore"><span className="ScoreIndex">{index}.</span> {score.toFixed(4)}</div>);
      index++;
      return result;
    });
  }
  render() {
    return ((this.state.isLoading) ? 
      <div className="Loader">
        <CircularProgress/>
      </div> :
      <div className="Leaderboard">
        <div className="Disclaimer"><b>Disclaimer:</b> This is not guaranteed to be the same for the final scores. Positioning may change based on final submission.</div>
        {this.state.topScores}
      </div>
    );
  }
}

export default Leaderboard;