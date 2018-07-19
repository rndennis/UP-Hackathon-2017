import React, { Component } from 'react';

import './CodeBlock.css';

export default class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.code = props.code;

    this.state = {
      isOpen: false
    };

    this.handleClickHeader = this.handleClickHeader.bind(this);
  }

  handleClickHeader() {
    console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidUpdate() {
    if (this.openedElement) {
      this.openedElement.scrollIntoView({ behavior: 'smooth' });
    }
    delete this.openedElement;
  }

  render() {
    return (
      <div className="Block">
        <div className="Header" onClick={this.handleClickHeader}>
          {this.title}
        </div>
        {this.state.isOpen ? (
          <div>
            <pre
              className="Code"
              ref={el => {
                this.openedElement = el;
              }}
            >
              {JSON.stringify(this.code, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="Spacer" />
        )}
      </div>
    );
  }
}
