import React, { Component } from 'react';

import { Paper, Tabs, Tab } from '@material-ui/core';

import './Problems.css';

class Problems extends Component {
  constructor(props) {
    super(props);

    const activeTab = this.props.match.params.problem;

    this.state = {
      activeTab
    };

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event, value) {
    this.setState({ activeTab: value });
    this.props.history.push(`/problems/${value}`);
  }

  render() {
    return (
      <div className="Problems">
        <Paper>
          <Tabs value={this.state.activeTab} onChange={this.handleChangeTab}>
            <Tab value="assistant" label="Customer Assistant" />
            <Tab value="pricing" label="Cross-Rail Pricing" />
            <Tab value="defect" label="Defect Classification" />
          </Tabs>
          <p>
            {this.state.activeTab === 'assistant' ? 'Customer Assistant' : ''}
            {this.state.activeTab === 'pricing' ? 'Cross-Rail Pricing' : ''}
            {this.state.activeTab === 'defect' ? 'Defect Classification' : ''}
          </p>
        </Paper>
      </div>
    );
  }
}

export default Problems;
