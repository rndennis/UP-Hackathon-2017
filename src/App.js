import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Paper, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Header/Header';
import Home from './Home/Home';
import Problems from './Problems/Problems';
import Schedule from './Schedule/Schedule';
import Rules from './Rules/Rules';
import Footer from './Footer/Footer';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#344955' },
    secondary: { main: '#FFCA28' }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="AppContent">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/problems/:problem" component={Problems} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/rules" component={Rules} />
                <Redirect exact from="/problems" to="problems/pricing" />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
