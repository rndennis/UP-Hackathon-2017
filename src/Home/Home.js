import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import sketchlogo from './sketchlogo.png';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Left">
          <img src={sketchlogo} alt="Logo" width="375px" />
        </div>
        <div className="Right">
          Welcome to the<br />
          <span className="YearDisplay">2018</span>
          <br />
          Union Pacific Intern Hackathon!
          <div>
            <Link to="/problems">
              <Button variant="contained" color="primary">
                Start Hacking <i className={'fas fa-terminal'} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
