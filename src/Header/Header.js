import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  withStyles
} from '@material-ui/core';

import './Header.css';

const styles = {
  navButton: {
    color: '#fff'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes
    };
  }

  openInNewTab(url) {
    return () => {
      window.open(url, '_blank');
    };
  }

  render() {
    return (
      <div className="Header">
        <AppBar>
          <Toolbar className="HeaderToolbar">
            <div className="Logo">
              <Link to="/">{'<up-hackathon/>'}</Link>
            </div>
            <div className="Navigation">
              <Link to="/problems">
                <Button className={this.state.classes.navButton}>
                  Problems
                </Button>
              </Link>
              <Link to="/schedule">
                <Button className={this.state.classes.navButton}>
                  Schedule
                </Button>
              </Link>
              <Link to="/faq">
                <Button className={this.state.classes.navButton}>FAQ</Button>
              </Link>
              <IconButton
                onClick={this.openInNewTab(
                  'https://discordapp.com/invite/dBAzraV'
                )}
              >
                <i className={['fab', 'fa-discord'].join(' ')} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
