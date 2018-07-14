import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header/Header';
import Problem from './Problem/Problem';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

import './App.css';

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
    this.setState({ teamName });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <div className="App">
            <Header updateTeamName={this.updateTeamName} />
            <Route exact path="/" component={Problem} />
            <Route path="/faq" component={FAQ} />
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
