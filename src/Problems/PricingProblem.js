import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

export class PricingProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          When is comes to travel, customers are accustomed to being able to 
          quickly and easily get prices for multiple options. This allows the 
          customer to make the best travel plans for them, weather that's the 
          cheapest, fastest, or most convenient option. Sites like <a href="https://www.kayak.com/" target="_blank">Kayak</a>, <a href="https://www.orbitz.com/" target="_blank">Orbitz</a>, <a href="https://www.google.com/flights" target="_blank">Google Flights</a>, 
          and <a href="https://www.expedia.com/" target="_blank">Expedia</a> are great examples of this type of service. 
          However when it comes to rail transportation, the process is tedious and slow.
        </p>
        <p>
          It requires customers to fill out forms with every little detail about their company and what they are trying to ship. 
          Then, after submitting those forms, they have to wait up to 20 days to receive a quote from a pricing representative! 
          Even after all of these hoops there are still more steps before the customer can actually ship their product. All of 
          these issues make it hard for the customer to find the best option for their company to ship products.  
        </p>
        <p>
          For this problem, the task is to design and prototype an easy to use cross-rail pricing user interface.
          No back end is necessary, but the interface should be interactive. Feel free to mock out data, and even 
          make up data you think would be useful to the user or wish you had. It's all about your team's creativity and 
          ability to focus on the customer experience!
        </p>
        <div className="ContentHeader">Background</div>
        <p>
          When a customer is trying to ship something they know a few things. What they want to ship, where they want to ship from, 
          and where they want to ship to. They might know a few other things, but they always have to know these things and should be able 
          to get a base quote based on them.
        </p>
        <p>
          Allowing customers to "shop around" and find the best option for their needs is important. Just like someone would shop for flights, 
          where they might care about non-stop more than price, businesses that want to ship their products might care more about reliability of 
          timelines than the actual length of the timeline. And for others, the priority might be reversed. Either way, customers want the flexibility 
          to choose. Even if it's not with UP! It's more important to build a reputation of honesty and operating with the best interest of the customer in mind.
        </p>
        <p>
          Another benefit of this type of service is that it allows Union Pacific to focus on the smaller customers. Customers who do not have whole 
          departments setup to handle negotiating contracts with shippers. These customers will be very important to the future growth of the railroad 
          so it's crucial that UP builds the right tools to serve them!
        </p>
        <div className="ContentHeader">Data</div>
        <p>
          You are provided with an <a href="https://storage.googleapis.com/hack-bucket/Project%20Rates.xlsx">excel sheet</a> of example
          shipping quotes from Union Pacific and the BNSF. The main purpose of
          this data is to show the major pieces of information that compose a
          quote for the customer. There also might be some other cool things you
          could do with it, feel free to be creative!
        </p>
        <p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Commodity</TableCell>
                <TableCell>Origin</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Car Type</TableCell>
                <TableCell>Rate Amount</TableCell>
                <TableCell>SCAC</TableCell>
                <TableCell>Transit Time</TableCell>
                <TableCell>Consistency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>30121</TableCell>
                <TableCell>AR-LITTLE ROCK UPG</TableCell>
                <TableCell>IL-CHICAGO UPG</TableCell>
                <TableCell>GONDOLA</TableCell>
                <TableCell>$4,982.00</TableCell>
                <TableCell>UP</TableCell>
                <TableCell>8</TableCell>
                <TableCell>92</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>30121</TableCell>
                <TableCell>AR-LITTLE ROCK UPG</TableCell>
                <TableCell>IL-CHICAGO UPG</TableCell>
                <TableCell>BHF &lt; 60</TableCell>
                <TableCell>$5,312.00 </TableCell>
                <TableCell>UP</TableCell>
                <TableCell>8</TableCell>
                <TableCell>92</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>30121</TableCell>
                <TableCell>AR-LITTLE ROCK UPG</TableCell>
                <TableCell>IL-CHICAGO UPG</TableCell>
                <TableCell>BHF &lt; 60</TableCell>
                <TableCell>$5,182.00</TableCell>
                <TableCell>UP</TableCell>
                <TableCell>8</TableCell>
                <TableCell>92</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </p>

        <ul className="UnstyledList">
          <li>
            <span className="Label">
              <span className="CustomerProvidedMarker">*</span> Commodity
            </span>
            <span>
              A code for the type of item being shipped. You can find a list of
              codes to item name <a href="https://storage.googleapis.com/hack-bucket/commodity_codes.csv">here</a>.
            </span>
          </li>
          <li>
            <span className="Label">
              <span className="CustomerProvidedMarker">*</span> Origin
            </span>
            <span>Where the customer wants to ship from.</span>
          </li>
          <li>
            <span className="Label">
              <span className="CustomerProvidedMarker">*</span> Destination
            </span>
            <span>Where the customer wants to ship to.</span>
          </li>
          <li>
            <span className="Label">
            <span className="CustomerProvidedMarker">*</span> Car Type
            </span>
            <span>
              The type of train car that will be used for the shipment. This can be chosen by the customer or the railroad.
            </span>
          </li>
          <li>
            <span className="Label">Rate Amount</span>
            <span>Estimated total cost of the shipment.</span>
          </li>
          <li>
            <span className="Label">SCAC</span>
            <span>The railroad coad.</span>
          </li>
          <li>
            <span className="Label">Transit Time</span>
            <span>
              Estimated number of days the
              shipment will take.
            </span>
          </li>
          <li>
            <span className="Label">Consistency</span>
            <span>
              How likely the shipment is to arrive in the estimated transit time.
            </span>
          </li>
          <li>
            <small>
              <span className="CustomerProvidedMarker">*</span> Provided by the
              customer
            </small>
          </li>
        </ul>
      </div>
    );
  }
}
