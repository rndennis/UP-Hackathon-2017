import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebaseConfig from './Private/firebase.config';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App/>, document.getElementById('root'));
registerServiceWorker();
