import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton';

import Login from '../Login/Login';
import FileUpload from '../FileUpload/FileUpload';

import './Score.css';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fileText: '',
      accuracy: ''
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleChangeUsername = this
      .handleChangeUsername
      .bind(this);
    this.handleChangePassword = this
      .handleChangePassword
      .bind(this);
    this.handleSelectFile = this
      .handleSelectFile
      .bind(this);
  }
  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
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

    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        this.setState({accuracy: data.accuracy});
      });
  }
  render() {
    return (
      <div className="Score">
        <div className="Login">
          <Login
            username={this.state.username}
            password={this.state.password}
            onChangeUsername={this.handleChangeUsername}
            onChangePassword={this.handleChangePassword}/>
        </div>
        <div className="FileUpload">
          <FileUpload onSelectFile={this.handleSelectFile}/>
        </div>
        <div className="Submit">
          <RaisedButton label="Submit" primary={true} onClick={this.handleSubmit}/>
        </div>
        <div className="Accuracy">
          <h2>{this.state.accuracy}</h2>
        </div>
      </div>
    );
  }
}

export default Score;