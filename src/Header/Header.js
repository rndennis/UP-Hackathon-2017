import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
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

const Navigation = () => (
  <ToolbarGroup lastChild={true}>
    <ToolbarSeparator/>
    <Link to="/">
      <FlatButton label="Problem"/>
    </Link>
    <Link to="/score">
      <FlatButton label="Score"/>
    </Link>
    <Link to="/judge">
      <FlatButton label="Judge"/>
    </Link>
  </ToolbarGroup>
);

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Toolbar style={toolbarStyle}>
          <LogoText/>
          <Navigation/>
        </Toolbar>
      </div>
    );
  }
}

export default Header;