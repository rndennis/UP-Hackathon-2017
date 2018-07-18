import React, { Component } from 'react';

import { Paper } from '@material-ui/core';

import './Schedule.css';

export default class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        <Paper className="ScheduleContent">
          <div className="ScheduleRow">
            <div>
              9:00 <small>AM</small>
              - 10:00 <small>AM</small>
            </div>
            <div>Arrive, get your t-shirt, and set up</div>
          </div>
          <div className="ScheduleRow">
            <div>
              10:00 <small>AM</small> - 10:30 <small>AM</small>
            </div>
            <div>Problem overview and Q&A session</div>
          </div>
          <div className="ScheduleRow">
            <div>
              10:30 <small>AM</small>
            </div>
            <div>Start hacking!</div>
          </div>
          <div className="ScheduleRow">
            <div>
              12:00 <small>PM</small>
            </div>
            <div>Lunch</div>
          </div>
          <div className="ScheduleRow">
            <div>
              6:00 <small>PM</small>
            </div>
            <div>Dinner</div>
          </div>
          <div className="ScheduleRow">
            <div>
              12:00 <small>AM</small>
            </div>
            <div>Ice cream and snacks</div>
          </div>
          <div className="ScheduleRow">
            <div>
              7:00 <small>AM</small>
            </div>
            <div>Breakfast</div>
          </div>
          <div className="ScheduleRow">
            <div>
              8:30 <small>AM</small>
            </div>
            <div>Commit all of your code!</div>
          </div>
          <div className="ScheduleRow">
            <div>
              8:40 <small>AM</small> - 9:40 <small>AM</small>
            </div>
            <div>Presentations</div>
          </div>
          <div className="ScheduleRow">
            <div>
              10:00 <small>AM</small>
            </div>
            <div>Announce winners</div>
          </div>
        </Paper>
      </div>
    );
  }
}
