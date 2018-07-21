import React, { Component } from 'react';

import { Paper } from '@material-ui/core';

import cvmeme from '../Memes/cvmeme.jpg';
import taxmeme from '../Memes/taxmeme.png';
import kirbzmeme from '../Memes/kirbzmeme.jpg';
import dronememe from '../Memes/dronememe.jpg';
import fastmlmeme from '../Memes/fastmlmeme.jpg';
import pmmeme from '../Memes/pmmeme.jpg';
import reactmeme from '../Memes/reactmeme.jpg';
import httpmeme from '../Memes/httpmeme.jpg';
import brainmeme from '../Memes/brainmeme.jpg';
import dbmeme from '../Memes/dbmeme.jpg';
import dumbmlmeme from '../Memes/dumbmlmeme.png';
import stackoverflowmeme from '../Memes/stackoverflowmeme.png';
import windowsmeme from '../Memes/windowsmeme.jpg';
import fpsmeme from '../Memes/fpsmeme.jpg';
import blockchainmeme from '../Memes/blockchainmeme.png';
import metalearningmeme from '../Memes/metalearningmeme.jpg';
import binarypantsmeme from '../Memes/binarypantsmeme.jpg';
import sourcecontrolmeme from '../Memes/sourcecontrolmeme.png';
import nvidiameme from '../Memes/nvidiameme.png';

import './Schedule.css';

export default class Schedule extends Component {
  getRandomMeme() {
    const memes = [
      cvmeme, taxmeme, kirbzmeme, dronememe, fastmlmeme, pmmeme, reactmeme, httpmeme,
      brainmeme, dbmeme, dumbmlmeme, stackoverflowmeme, windowsmeme, fpsmeme, blockchainmeme,
      metalearningmeme, binarypantsmeme, sourcecontrolmeme, nvidiameme
    ];
    return memes[Math.floor(Math.random() * memes.length)];
  }
  render() {
    return (
      <Paper>
        <div className="Schedule">
          <div>
            <div className="Event">
              <div className="Time">9:00 AM</div>
              <span className="Description">
                Arrive, set up and get your t-shirt
              </span>
            </div>
            <div className="Event">
              <div className="Time">10:00 AM</div>
              <span className="Description">
                Introduce problems, quick Q&A session
              </span>
            </div>
            <div className="Event">
              <div className="Time">12:00 PM</div>
              <span className="Description">Lunch</span>
            </div>
            <div className="Event">
              <div className="Time">6:00 PM</div>
              <span className="Description">Dinner</span>
            </div>
            <div className="Event">
              <div className="Time">7:00 PM</div>
              <span className="Description">
                Side Track 1: Paper Airplane Contest
              </span>
            </div>
            <div className="Event">
              <div className="Time">12:00 AM</div>
              <span className="Description">
                <div>Ice Cream & Snacks</div>
                <div>Side Track 2: Best Meme Contest</div>
              </span>
            </div>
            <div className="Event">
              <div className="Time">7:00 AM</div>
              <span className="Description">Breakfast</span>
            </div>
            <div className="Event">
              <div className="Time">8:15 AM</div>
              <span className="Description">
                Commit your code and set up for judges
              </span>
            </div>
            <div className="Event">
              <div className="Time">8:30 AM</div>
              <span className="Description">Judgment time</span>
            </div>
            <div className="Event">
              <div className="Time">9:30 AM</div>
              <span className="Description">
                Side Track 3: Rock, Paper, Scissors Contest
              </span>
            </div>
            <div className="Event">
              <div className="Time">10:00 AM</div>
              <span className="Description">Announce winners</span>
            </div>
          </div>
          <div className="Meme">
            <img src={this.getRandomMeme()} alt="Meme zone" />
          </div>
        </div>
      </Paper>
    );
  }
}
