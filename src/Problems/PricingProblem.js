import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class PricingProblem extends Component {
  render() {
    return (
      <div>
        <h3>Problem Description</h3>
        <p>
          When is comes to travel, customers are accustomed to being able to quickly and easily get prices for multiple options. 
          This allows the customer to make the best travel plans for them, weather that's the cheapest, fastest, or most convenient option. 
          Sites like Kayak, Orbitz, and Expedia are great examples of this type of service. 
          However when it comes to 
        </p>
        <h3>Requirements</h3>
        <p>
          ...
        </p>
        <h3>Data Description</h3>
        <p>
          You are provided with an <a href="bleh">excel sheet</a> of example shipping quotes from the Union Pacific and the BNSF railroads. 
          The main purpose of this data is to show the major pieces of information that compose a quote for the customer. 
          There also might be some other cool things you could do with it, feel free to be creative!
        </p>
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
        <ul>
          <li>Commodity*: A code for the type of item being shipped. A list of codes to item name can be found <a href="bleh">here</a>.</li>
          <li>Origin*: Where the customer wants to ship from.</li>
          <li>Destination*: Where the customer wants to ship to.</li>
          <li>Car Type: The type of train car that will be used for the shipment.</li>
          <li>Rate Amount: Estimated total cost of the shipment.</li>
          <li>SCAC: The railroad code.</li>
          <li>Transit Time: Estimated number of ____ the shipment will take.</li>
          <li>Consistency: How _____</li>
        </ul>
        <p>* provided by the customer</p>
      </div>
      );
    }
}
