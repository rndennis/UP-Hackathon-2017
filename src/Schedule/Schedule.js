import React, { Component } from 'react';

import './Schedule.css';

export default class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        <div className="Event">
          <div className="Time">9:00 AM</div>
          <span className="Descripton">
            Arrive, set up and get your t-shirt
          </span>
        </div>
        <div className="Event">
          <div className="Time">9:00 AM</div>
          <span className="Descripton">
            Arrive, set up and get your t-shirt
          </span>
        </div>
      </div>
    );
  }
}
