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
          <img src={sketchlogo} alt="Logo" />
        </div>
        <div className="Divider" />
        <div className="Right">
          <div>
            Welcome to the<br />
            <div className="YearDisplay">2018</div>
            Union Pacific<br />
            Intern Hackathon!
            <div>
              <Link to="/problems">
                <Button variant="contained" color="primary">
                  Start Hacking <i className={'fas fa-terminal'} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
