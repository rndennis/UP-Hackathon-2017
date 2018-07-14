import React, { Component } from 'react';

import { Paper } from '@material-ui/core';

import './FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <Paper>
          {/* Comment EmptyFAQ out when we get contents */}
          <div className="EmptyFAQ">
            <p>
              No one's asked any questions yet! Come to one of the hackathon
              committee members with your questions and we'll update this page
              as the event progresses.
            </p>
          </div>
          {/* Uncomment FAQContents when we get contents */}
          {/* <div className="FAQContents">
          </div> */}
        </Paper>
      </div>
    );
  }
}

export default FAQ;
