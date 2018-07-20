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
        <div
          className={`Header ${!this.state.isOpen ? 'CollapsedHeader' : ''}`}
          onClick={this.handleClickHeader}
        >
          <div>{this.title}</div>
          <div>
            {this.state.isOpen ? (
              <i className={'fas fa-caret-up'} />
            ) : (
              <i className={'fas fa-caret-down'} />
            )}
          </div>
        </div>
        <div className={this.state.isOpen ? 'OpenedCode' : 'CollapsedCode'}>
          <pre
            className="Code"
            ref={el => {
              this.openedElement = el;
            }}
          >
            {JSON.stringify(this.code, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}
