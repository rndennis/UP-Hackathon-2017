import React, {Component} from 'react'

import TextField from 'material-ui/TextField';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="ContentBlock">
          <p>Enter the username and password provided to you:</p>
        </div>
        <div className="TextFields">
          <div className="TextField">
            <TextField
              floatingLabelText="Team Name"
              value={this.props.username}
              onChange={this.props.onChangeUsername}/>
          </div>
          <div className="TextField">
            <TextField
              type="password"
              floatingLabelText="Password"
              value={this.props.password}
              onChange={this.props.onChangePassword}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;