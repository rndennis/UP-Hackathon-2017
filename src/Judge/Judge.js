import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import { auth } from '../firebase';

import './Judge.css';

class Judge extends Component {
  componentWillMount() {
    this.setState({isLoading: true});
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        this
          .props
          .history
          .push('/login');
      } else {
        this.setState({isLoading: false});
      }
    });
    this.setState({unsubscribe});
  }
  componentWillUnmount() {
    this.state.unsubscribe();
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