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
              title={(<b>7-Day Carloadings vs Daily Carloadings?</b>)}
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
              title={(<b>Will we be able to use data from 2015?</b>)}
              actAsExpander={true}
              showExpandableButton={true}/>
            <CardText expandable={true}>
              No, the data from 2015 is purposefully withheld in order to more accurately score your solution. Your model is intended to be able to generalize well enough to be able to predict any date given within a resonable time frame.
            </CardText>
          </Card>
        </div>
        <div className="Question">
          <Card>
            <CardHeader
              title={(<b>What data will we be testing against for the final submission?</b>)}
              actAsExpander={true}
              showExpandableButton={true}/>
            <CardText expandable={true}>
              We have chosen to withhold the actual date range you'll be testing against in an effort to accurately evaluate the performance of your model. However, we do want to emphasize that the date range for the final submission <b>is not</b> going to be 2015.
              You will be given the final date range around 7:00 AM on Sunday so that you can prepare your data to submit.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default FAQ;