import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Login from '../Login/Login';
import { auth } from '../firebase';

import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChangeUsername = this
      .handleChangeUsername
      .bind(this);
    this.handleChangePassword = this
      .handleChangePassword
      .bind(this);
    this.handleLogin = this
      .handleLogin
      .bind(this);
  }
  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleLogin(event) {
    auth.signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((success) => {
        this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="Login">
          <Login
            username={this.state.username}
            password={this.state.password}
            onChangeUsername={this.handleChangeUsername}
            onChangePassword={this.handleChangePassword}/>
        </div>
        <div className="LoginButton">
          <RaisedButton label="Login" primary={true} onClick={this.handleLogin}/>
        </div>
      </div>
    );
  }
}

export default LoginPage;