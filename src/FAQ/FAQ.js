import React, {Component} from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';

import './FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <div className="Question">
          <Card>
            <CardHeader
              title="7-Day Carloadings vs Daily Carloadings?"
              actAsExpander={true}
              showExpandableButton={true}/>
            <CardText expandable={true}>
              7-Day Carloadings are the averages of the Daily Carloadings over the course of the previous seven days. More specifically they are rolling averages.
            </CardText>
          </Card>
        </div>
        <div className="Question">
          <Card>
            <CardHeader
              title="Will we be able to use data from 2015?"
              actAsExpander={true}
              showExpandableButton={true}/>
            <CardText expandable={true}>
              No, the data from 2015 is purposefully withheld in order to more accurately score your solution. Your model is intended to be able to generalize well enough to be able to predict any date given within a resonable time frame.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default FAQ;