import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import FileUpload from '../FileUpload/FileUpload';
import {auth} from '../firebase';

import './Score.css';

class Score extends Component {
  componentWillMount() {
    this.setState({isLoading: true});
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this
          .props
          .history
          .push('/login');
      } else {
        this.setState({isLoading: false});
      }
    });
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
    const url = 'http://hackathon-api-dev.us-east-2.elasticbeanstalk.com/hackathon/api/test';
    const content = this.state.fileText;

    const headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    headers.append('Content-Length', content.length);

    const request = new Request(url, {
      method: 'POST',
      headers,
      body: content
    });

    fetch(request).then((response) => response.json()).then((data) => {
      this.setState({accuracy: data.accuracy, message: data.message});
    }).catch((error) => {
      this.setState({message: 'Uncaught service error - please let someone know!'});
    });
  }
  getResult() {
    return (this.state.accuracy)
      ? <div className="Accuracy">
          {this.state.accuracy}
        </div>
      : <div className="ErrorMessage">
        {this.state.message}
      </div>;
  }
  render() {
    return ((this.state.isLoading)
      ? <div className="Loader"><CircularProgress/></div>
      : <div className="Score">
        <div className="Instructions">
          <Card>
            <CardHeader
              title="Instructions for Testing"
              actAsExpander={true}
              showExpandableButton={true}/>
            <CardText expandable={true}>
              Submit the CSV file that contains your predictions. If you forget what the
              format of the data is, refer to the
              <a href="/">problem description</a>. The dates in your submission should range
              from 2014-01-01 to 2014-12-31. You should see an accuracy score upon a
              successful submission.
              <b>If you run into an issue with the interface, talk to Renee.</b>
            </CardText>
          </Card>
        </div>
        <div className="FileUpload">
          <FileUpload onSelectFile={this.handleSelectFile}/>
        </div>
        <div className="Submit">
          <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit}/>
        </div>
        {this.getResult()}
      </div>);
  }
}

export default Score;