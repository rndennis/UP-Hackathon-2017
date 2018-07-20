import React, { Component } from 'react';

import cvmeme from '../Memes/cvmeme.jpg';
import taxmeme from '../Memes/taxmeme.png';
import kirbzmeme from '../Memes/kirbzmeme.jpg';

import './Schedule.css';

export default class Schedule extends Component {
  getRandomMeme() {
    const memes = [cvmeme, taxmeme, kirbzmeme];
    return memes[Math.floor(Math.random() * memes.length)];
  }
  render() {
    return (
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
            <div className="Time">12:00 AM</div>
            <span className="Description">Ice Cream & Snacks</span>
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
            <div className="Time">10:00 AM</div>
            <span className="Description">Announce winners</span>
          </div>
        </div>
        <div className="Meme">
          <img src={this.getRandomMeme()} alt="Meme zone" />
        </div>
      </div>
    );
  }
}
