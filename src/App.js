import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as firebase from 'firebase';

import Header from './Header/Header';
import Problem from './Problem/Problem';
import Score from './Score/Score';
import Judge from './Judge/Judge';
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
    const ref = firebase.database().ref('credentials/test');
    ref.once('value').then((snapshot) => {
      console.log(snapshot.val());
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <HashRouter>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Problem}/>
            <Route path="/score" component={Score}/>
            <Route path="/judge" component={Judge}/>
            <Footer/>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
