import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header/Header';
import Problems from './Problems/Problems';
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
            <Header />
            <Switch>
              <Route path="/problems/:problem" component={Problems} />
              <Route path="/faq" component={FAQ} />
              <Redirect exact from="/problems" to="problems/assistant" />
              <Redirect exact from="/" to="/problems/assistant" />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
