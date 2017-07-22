import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {auth, db} from '../firebase';
import './Header.css';

const toolbarStyle = {
  backgroundColor: 'transparent'
};

const LogoText = () => (
  <ToolbarGroup>
    <span className="Logo">
      {'<up-hackathon/>'}
    </span>
  </ToolbarGroup>
);

class Header extends Component {
  componentWillMount() {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const prefix = user.email.split('@')[0];
        db.ref(`/participants/${prefix}`)
          .once('value')
          .then((snapshot) => {
            this.setState({teamName: snapshot.val()});
            this.props.updateTeamName(snapshot.val());
          });
      }
    });
    this.setState({unsubscribe});
  }
  componentWillUnmount() {
    this.state.unsubscribe();
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <Toolbar style={toolbarStyle}>
          <LogoText/>
          <ToolbarGroup lastChild={true}>
            <div className="TeamName">
              <FlatButton
                label={(this.state.teamName)
                ? (this.state.teamName)
                : ' '}
                disabled={true}/>
            </div>
            <ToolbarSeparator/>
            <Link className="NavigationButton" to="/">
              <FlatButton label="Problem"/>
            </Link>
            <Link className="NavigationButton" to="/score">
              <FlatButton label="Score"/>
            </Link>
            <Link className="LeaderboardButton" to="/leaderboard">
              <FlatButton label="Leaderboard"/>
            </Link>
            <Link className="NavigationButton" to="/faq">
              <FlatButton label="FAQ"></FlatButton>
            </Link>
            {/* <Link className="NavigationButton" to="/judge">
              <FlatButton label="Judge"/>
            </Link> */}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default Header;