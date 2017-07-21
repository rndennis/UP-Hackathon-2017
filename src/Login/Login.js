import React, {Component} from 'react'

import TextField from 'material-ui/TextField';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="TextFields">
          <div className="UsernameField">
            <TextField
              floatingLabelText="Username"
              value={this.props.username}
              onChange={this.props.onChangeUsername}/>
          </div>
          <div className="PasswordField">
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