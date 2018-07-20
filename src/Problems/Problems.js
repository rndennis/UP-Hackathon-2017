import React, { Component } from 'react';

import { Tabs, Tab, Paper } from '@material-ui/core';

import { AssistantProblem } from './AssistantProblem';
import { PricingProblem } from './PricingProblem';
import { DefectProblem } from './DefectProblem';

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
      <Paper>
        <div className="Problems">
          <Tabs value={this.state.activeTab} onChange={this.handleChangeTab}>
            <Tab value="pricing" label="Cross-Rail Pricing" />
            <Tab value="assistant" label="Customer Assistant" />
            <Tab value="defect" label="Defect Classification" />
          </Tabs>
          {this.state.activeTab === 'assistant' ? <AssistantProblem /> : ''}
          {this.state.activeTab === 'pricing' ? <PricingProblem /> : ''}
          {this.state.activeTab === 'defect' ? <DefectProblem /> : ''}
        </div>
      </Paper>
    );
  }
}

export default Problems;
