import React, { Component } from 'react';

import lifecycle from './lifecycle.png';
import conversation from './conversation.png';

import CodeBlock from '../CodeBlock/CodeBlock';

const mockEquipment = {
  id: 'SHMC6134',
  empty: false,
  commodity: 'Coal',
  carType: 'Uncovered Hopper',
  serviceIssue: {
    referenceNumber: '00516',
    status: 'Open'
  },
  eta: '2018-07-23T05:04:00.000-05:00',
  completedEvents: [
    {
      name: 'Released for Movement',
      dateTime: '2018-06-04T13:47:00.000-05:00',
      location: { city: 'Stexlead', state: 'TX' }
    },
    {
      name: 'Pulled from Industry ',
      dateTime: '2018-06-12T09:07:00.000-05:00',
      location: { city: 'Stexlead', state: 'TX' }
    },
    {
      name: 'Arrived ',
      dateTime: '2018-06-12T10:09:00.000-05:00',
      location: { city: 'Stexlead', state: 'TX' }
    },
    {
      name: 'Departed ',
      dateTime: '2018-06-22T11:02:00.000-05:00',
      location: { city: 'Stexlead', state: 'TX' }
    },
    {
      name: 'Arrived ',
      dateTime: '2018-06-22T14:20:00.000-05:00',
      location: { city: 'Texarkana', state: 'AR' }
    },
    {
      name: 'General Hold',
      dateTime: '2018-06-25T22:12:00.000-05:00',
      location: { city: 'Texarkana', state: 'AR' }
    },
    {
      name: 'Released from Hold ',
      dateTime: '2018-07-05T15:57:00.000-05:00',
      location: { city: 'Texarkana', state: 'AR' }
    }
  ],
  scheduledEvents: [
    {
      name: 'Scheduled Departure',
      dateTime: '2018-07-21T11:15:00.000-05:00',
      location: { city: 'Stexlead', state: 'TX' }
    },
    {
      name: 'Scheduled Arrival',
      dateTime: '2018-07-21T20:00:00.000-05:00',
      location: { city: 'Texarkana', state: 'AR' }
    },
    {
      name: 'Scheduled Departure',
      dateTime: '2018-07-22T23:11:00.000-05:00',
      location: { city: 'Texarkana', state: 'AR' }
    },
    {
      name: 'Scheduled Arrival',
      dateTime: '2018-07-23T05:04:00.000-05:00',
      location: { city: 'Nlitrock', state: 'AR' }
    },
    {
      name: 'Scheduled Departure',
      dateTime: '2018-07-24T13:00:00.000-05:00',
      location: { city: 'Nlitrock', state: 'AR' }
    }
  ]
};

const mockServiceIssue = {
  dateOpened: '2018-07-20T13:05:01.000-05:00',
  dateLastUpdated: '2018-07-21T09:24:15.000-05:00',
  reason: 'Load Shift',
  status: 'Service Plan Available',
  equipmentId: 'ABOX16092',
  referenceNumber: '31537',
  comments: [
    {
      dateCreated: '2018-07-21T09:24:15.000-05:00',
      author: 'Bob Houghton',
      company: 'Union Pacific Railroad',
      comments:
        'Yes, I verified that the car was inspected and we are waiting for it to be adjusted.'
    },
    {
      dateCreated: '2018-07-21T07:15:10.000-05:00',
      author: 'Alice Potter',
      company: 'Random Corp',
      comments: 'Has this equipment been inspected yet?'
    },
    {
      dateCreated: '2018-07-20T13:05:01.000-05:00',
      author: 'Bob Houghton',
      company: 'Union Pacific Railroad',
      comments:
        'This equipment has been placed in load shift hold. Please contact our Shipment Quality team at 555-555-5555 if you have any questions'
    }
  ]
};

const mockNotifications = [
  {
    type: 'Bad Order',
    dateTime: '2018-07-19T15:21:00.000-05:00',
    description:
      'Your shipment has been identified as having a mechanical defect, having a safety violation, or having been loaded improperly.',
    etd: ''
  },
  {
    type: 'Placed at Industry',
    dateTime: '2018-07-20T12:35:16.000-05:00',
    description:
      'Your shipment is in an accessible position for loading/unloading.'
  },
  {
    type: 'Service Interruption',
    dateTime: '2018-07-15T06:22:34.000-05:00',
    description:
      'An event has caused normal train movement at a location, impacting crews, locomotives, trains, and shipments.'
  }
];

const MockPriceQuoteRequest = {
  origin: {
    city: 'Omaha',
    state: 'Nebraska'
  },
  destination: {
    city: 'Los Angeles',
    state: 'California'
  },
  commodity: 'Corn'
};

export class AssistantProblem extends Component {
  handleClick() {
    console.log('hello world');
  }
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
          number"; it's a unique identifier that we use internally. Instead,
          they think of themselves as a name of a company and, often times, they
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
          there can be unpredictable snags along the way. If an exception occurs
          at any of these states, customers need to be informed as soon as
          possible. And, if there are any outstanding service issues, customers
          value timely updates as well.
        </p>
        <div className="ContentHeader">Data</div>
        <p>
          We don't have specific data sets for this problem. We don't want to
          restrict you to our (sometimes overly) complex data. As most of you
          are probably still rail newbies, you provide a valuable perspective on
          how to approach this particular problem. We hope that you can think
          outside of the box, extrapolate, and derive some fresh ideas. However,
          we do want to give you some examples of critical and common
          information associated with cars/equipment, notifications, exceptions,
          service issues, etc.
        </p>
        <p>
          Below is some mocked data that you can use for your assistant. You are
          not, however, limited to just this data. If you can think of anything
          else that might be useful for customers, feel free to pursue it. For
          this event, the accuracy of the data isn't as important as the
          interaction models you build with your assistant. If you have any
          questions, feel free to ask in the <i>#assistant</i> channel or come
          ask Renee directly.
        </p>
        <div>
          <CodeBlock title="Mock Car/Equipment" code={mockEquipment} />
          <CodeBlock title="Mock Service Issue" code={mockServiceIssue} />
          <CodeBlock title="Mock Notifications" code={mockNotifications} />
          <CodeBlock
            title="Mock Price Quote Request"
            code={MockPriceQuoteRequest}
          />
        </div>
      </div>
    );
  }
}
