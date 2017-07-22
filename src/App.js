import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header/Header';
import Problem from './Problem/Problem';
import LoginPage from './LoginPage/LoginPage';
import Score from './Score/Score';
import Judge from './Judge/Judge';
import Leaderboard from './Leaderboard/Leaderboard';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

import './App.css';

injectTapEventPlugin();

const theme = getMuiTheme({
  appBar: {
    color: 'transparent',
    textColor: '#555'
  },
  toolbar: {
    color: 'transparent'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: ''
    };
    this.updateTeamName = this.updateTeamName.bind(this);
  }
  updateTeamName(teamName) {
    this.setState({teamName});
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <div className="App">
            <Header updateTeamName={this.updateTeamName}/>
            <Route exact path="/" component={Problem}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/score" component={Score}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/leaderboard" component={Leaderboard}/>
            {/* <Route path="/judge" component={Judge}/> */}
            <Footer/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
