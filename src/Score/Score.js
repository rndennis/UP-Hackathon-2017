import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FileUpload from '../FileUpload/FileUpload';
import {auth, db} from '../firebase';

import './Score.css';

class Score extends Component {
  componentWillMount() {
    this.setState({isLoading: true});
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        this
          .props
          .history
          .push('/login');
      } else {
        const prefix = user.email.split('@')[0];
        db.ref(`/participants/${prefix}`)
          .once('value')
          .then((snapshot) => {
            this.setState({teamName: snapshot.val()});
            this.setState({isLoading: false});
          });
      }
    });
    this.setState({unsubscribe});
  }
  componentWillUnmount() {
    this.state.unsubscribe();
  }
  constructor(props) {
    super(props);
    this.state = {
      fileText: '',
      accuracy: ''
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleSelectFile = this
      .handleSelectFile
      .bind(this);
  }
  handleSelectFile(event) {
    this.setState({fileText: event.target.result});
  }
  handleSubmit() {
    this.setState({isServiceRunning: true});
    const url = 'https://hackathon.chezgoose.com/hackathon/api/final';
    const content = this.state.fileText;

    const headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    headers.append('Content-Length', content.length);

    const request = new Request(url, {
      method: 'POST',
      headers,
      body: content
    });

    if (content) {
      fetch(request).then((response) => response.json()).then((data) => {
        this.setState({accuracy: data.accuracy, message: data.message, isServiceRunning: false});
        const newScoresRef = db.ref().child('final').push();
        const submissionTime = new Date();
        if (data.accuracy) {
          newScoresRef.set({
            teamName: (this.state.teamName) ? this.state.teamName : 'Anonymous',
            accuracy: data.accuracy,
            submissionTime: submissionTime.toString()
          });
        }
      }).catch((error) => {
        this.setState({message: 'Unknown service error - please let someone know!', isServiceRunning: false, accuracy: void 0});
      });
    } else {
      this.setState({message: 'You need to select a file', isServiceRunning: false});
    }
  }
  getSubmitButton() {
    return (this.state.isServiceRunning)
      ? <div className="ServiceLoader">
          <CircularProgress/>
        </div>
      : <div className="Submit">
        <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit}/>
      </div>
  }
  getResult() {
    return (this.state.accuracy)
      ? <div className="Accuracy">
          Score: {this.state.accuracy.toFixed(4)}%
        </div>
      : <div className="ErrorMessage">
        {this.state.message}
      </div>;
  }
  render() {
    return ((this.state.isLoading)
      ? <div className="Loader"><CircularProgress/></div>
      : <div className="Score">
          <h1 className="finalSumbission">DAWN OF THE FINAL SUBMISSION</h1>
          <h3 className="finalHours">1.5 HOURS REMAIN</h3>
          <div className="Instructions">
            <Card>
              <CardHeader
                title={(<b>Instructions for Final Submission</b>)}
                actAsExpander={true}
                showExpandableButton={true}/>
              <CardText expandable={true}>
                Submit the CSV file that contains your predictions. If you forget what the
                format of the data is, refer to the <a href="/">problem description</a>. The dates in your submission should range
                from 2016-01-01 to 2017-05-31. You should see an accuracy score upon a successful
                submission. We've found that if you're attempting to submit a CSV file that has been opened in Excel recently, you'll likely get
                an error. To resolve it, just export to a CSV file from Excel and try to submit that. <b>If you run into an issue with the interface, talk to Renee or Andrew.</b>
              </CardText>
            </Card>
          </div>
          <div className="Form">
            <div className="FileUpload">
              <FileUpload onSelectFile={this.handleSelectFile}/>
            </div>
            {this.getSubmitButton()}
          </div>
          {this.getResult()}
        </div>);
  }
}

export default Score;