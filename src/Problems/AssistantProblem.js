import React, { Component } from 'react';

import lifecycle from './lifecycle.png';
import conversation from './conversation.png';

const mockEquipment = {
  id: 'SHMC1234',
  empty: false,
  commodity: 'Beer',
  carType: '',
  completedEvents: [],
  scheduledEvents: [],
  serviceIssues: []
};

const mockServiceIssue = {
  dateOpened: '',
  dateLastUpdated: '',
  reason: '',
  status: '',
  equipmentId: '',
  referenceNumber: '',
  comments: [
    {
      dateCreated: '',
      author: '',
      company: '',
      comments: ''
    }
  ]
};

const mockNotification = {
  type: '',
  dateTime: ''
};

export class AssistantProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          Today, our customers have to navigate nearly 60 different applications
          to complete their daily tasks. As the customer's experience is
          becoming an even higher priority at Union Pacific, we're starting to
          explore our options for how to improve how every one of our customers
          interact with our services and systems.
        </p>
        <p>
          Imagine this very real scenario: one of our customers' warehouses is
          heavily refrigerated to preserve the quality of the goods they ship
          with us. Their employees (by extension, our customers as well) use our
          tracking and shipment management applications to monitor and handle
          shipments with us. With their environment forcing them to don down
          parkas and gloves, it's impossible to effectively navigate our systems
          without removing their gloves. This particular customer was only able
          to track one or two cars at a time, simply because they couldn't keep
          their gloves off for long enough to type any more. What if they didn't
          have to take off their gloves at all?
        </p>
        <p>
          That scenario, and several others, are where the customer-facing
          assistant comes into play; it's one of many avenues we're exploring to
          improve how we interact with our customers. We'd like you to take a
          stab at creating some form of an intelligent assistant, whether it be
          text-based, voice-based or both, that could help make working with us
          as seamless as possible.
        </p>
        <p className="ImageWrapper">
          <img
            className="ConversationImage"
            src={conversation}
            alt="Sample conversation"
          />
        </p>
        <div className="ContentHeader">Background</div>
        <p>
          While equipment (or car) tracking and ETA inquiry is one of the most
          important and obvious services customers value, there are numerous
          others. Customers want quick and reliable visibility into their
          shipments. They don't want to have to fill out a convoluted form to
          submit an inquiry about prices, and they certainly don't want to wait
          weeks (yes, with the current process, it can take weeks!) to recieve
          that price quote. They want a simplified interface, free from as much
          of our internal rail jargon as possible.
        </p>
        <p>
          Every customer should be associated with one or more locations (often
          also referred to as firms). They don't typically know their "firm
          number"; it's unique identifier that we use internally. Instead, they
          think of themselves as a name of a company and, often times, they
          might use city and state to distinguish themselves (e.g. Kellogg's in
          Battle Creek, Michigan and Kellogg's in Omaha, Nebraska).
        </p>
        <p>
          Customers need as much visibility into their shipments as possible.
          Their shipments are often split up into different "inventory" states
          for one or more locations. Currently, customers can view their
          shipments on a car (otherwise known as equipment) level. Each car is
          typically referred as en route (either inbound to their industry yard
          or outbound from their industry yard), at one of our serving yards, or
          currently at their industry yard. A simplified graphic representation
          of this "lifecycle" is shown below.
        </p>
        <p className="ImageWrapper">
          <img
            className="LifecycleImage"
            src={lifecycle}
            alt="Shipment lifecycle"
          />
        </p>
        <p>
          There are many more steps involved in this process. To progress
          through the cycle, a customer must "order" a car into their industry
          and they must "release" equipment from their industry. And, of course,
          there are can be unpredictable snags along the way. If an exception
          occurs at any of these states, customers need to be informed as soon
          as possible. And, if there are any outstanding service issues,
          customers value timely updates as well.
        </p>
        <div className="ContentHeader">Data</div>
        <p>
          We don't have specific data sets for this problem. We don't want to
          restrict you to our (sometimes overly) complex data. As most of you
          are probably still rail newbies, you provide a valuable perspective on
          how to approach this particular problem. We hope that you can think
          outside of the box, extrapolate, and derive some fresh ideas. However,
          we do want to give you some examples of critical and common
          information associated with cars/equipment, exceptions, service
          issues, etc.
        </p>
        <div className="FlexContainer">
          <div className="CodeBlock">
            <div className="CodeBlockTitle">Mock Car/Equipment</div>
            <pre className="CodeBlockCode">
              {JSON.stringify(mockEquipment, null, 2)}
            </pre>
          </div>
          <div className="CodeBlock">
            <div className="CodeBlockTitle">Mock Service Issue</div>
            <pre className="CodeBlockCode">
              {JSON.stringify(mockServiceIssue, null, 2)}
            </pre>
          </div>
          <div className="CodeBlock">
            <div className="CodeBlockTitle">Mock Notification</div>
            <pre className="CodeBlockCode">
              {JSON.stringify(mockNotification, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
