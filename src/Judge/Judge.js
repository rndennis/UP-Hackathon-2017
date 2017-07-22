import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import { auth } from '../firebase';

import './Judge.css';

class Judge extends Component {
  componentWillMount() {
    this.setState({isLoading: true});
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this
          .props
          .history
          .push('/login');
      } else {
        this.setState({isLoading: false});
      }
    });
  }
  render() {
    return ((this.state.isLoading) ?
      <div className="Loader">
        <CircularProgress/>
      </div> :
      <div className="Judge">
        <p>Coming soon...</p>
      </div>
    );
  }
}

export default Judge;