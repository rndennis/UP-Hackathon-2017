import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './Header/Header';
import Problems from './Problems/Problems';
import Schedule from './Schedule/Schedule';
import FAQ from './FAQ/FAQ';
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
            <Switch>
              <Route path="/problems/:problem" component={Problems} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/faq" component={FAQ} />
              <Redirect exact from="/problems" to="problems/pricing" />
              <Redirect exact from="/" to="/problems/pricing" />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
