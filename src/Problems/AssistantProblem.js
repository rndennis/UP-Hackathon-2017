import React, { Component } from 'react';

import lifecycle from './lifecycle.png';
import conversation from './conversation.png';

export class AssistantProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          Today, our customers have to navigate nearly 60 different applications
          to complete their daily tasks. As the customer's experience is
          becoming a higher priority, we're starting to explore our options for
          how to improve how every customer interacts with our services and
          systems.
        </p>
        <p>
          That's where the customer-facing assistant comes into play; it's one
          of many avenues we're exploring to improve how we interact with our
          customers. We'd like you to take a stab at creating some form of an
          intelligent assistant, whether it be text-based, voice-based or both,
          that could help make working with us as seamless as possible.
        </p>

        <p>
          Biggest benefits can be seen with the smaller customers that don't
          ship an immense amount of things with us, or that don't have large
          technology departments, or even something as specific as customers who
          work all day in heavily refrigerated warehouses that can't take off
          their gloves for long periods of time to navigate our site on a
          computer.
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
          internal rail jargon as possible.
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
          Customers often want visibility into their inventories for one or more
          locations, typically for cars en route (either inbound to them or
          outbound from them), cars at one of our serving areas, and cars
          currently at their industry. A graphic reprenstation of this
          "lifecycle" is shown below (albeit a little simplified for the sake of
          this event).
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
          We don't have specific data sets for this problem. However, we do want
          to give you some examples of common information associated with
          cars/equipment, exceptions, and service issues.
        </p>
      </div>
    );
  }
}
