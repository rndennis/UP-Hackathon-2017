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
          cheapest, fastest, or most convenient option. Sites like Kayak,
          Orbitz, and Expedia are great examples of this type of service.
          However when it comes to
        </p>
        <div className="ContentHeader">Background</div>
        <div className="ContentHeader">Data</div>
        <p>
          You are provided with an <a href="bleh">excel sheet</a> of example
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
              codes to item name <a href="#">here</a>.
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
            <span className="Label">Car Type</span>
            <span>
              The type of train car that will be used for the shipment.
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
              Estimated number of <b style={{ color: 'red' }}>(units)</b> the
              shipment will take.
            </span>
          </li>
          <li>
            <span className="Label">Consistency</span>
            <span>
              <b style={{ color: 'red' }}>?????</b>
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
