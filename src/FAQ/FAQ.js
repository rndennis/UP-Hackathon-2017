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
                title="7-Day Carloadings vs Daily Carloadings"
                actAsExpander={true}
                showExpandableButton={true}/>
              <CardText expandable={true}>
                Answer coming soon...
              </CardText>
            </Card>
          </div>
      </div>
    );
  }
}

export default FAQ;