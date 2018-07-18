import React, { Component } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Icon
} from '@material-ui/core';

export class DefectProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          Train derailments are can be a catastrophic event for the railroad. They incur large monetary costs to Union Pacific and can cause major delays for customers, environmental damage, and even loss of life. 
          It's very important, both for business and the communities UP serves, that these derailments be mitigated. 
        </p> 
        <p>
          Regular train inspections are one way UP works to keep trains safe, but they require trains to stop and have someone
          walk up and down the sides looking for issues. This is both a time sink and people can easily miss small issues when trying to finish the inspection as fast as possible.
          Enter InAdvance, a computer vision based system that allows trains to be inspected before reaching the yards. InAdvance works by taking long pictures, called line scans, of the sides of the cars
          as they move by at speeds up to 70mph. Object detection algorithms are then run on these huge images to find the relevant parts of the train for inspections.
        </p>
        <p>
          For this problem you will be looking at developing algorithms to find increasingly difficult defects in three different train car parts:
        </p>
        <ol>
          <li>
            Truck Springs
          </li>
          <li>
            Brake Shoes 
          </li>
          <li>
            Wheels
          </li>
        </ol>
        <p>
          You should think creatively about 
        </p>
        <div className="ContentHeader">Background</div>
        <div className="ContentHeader">Data</div>
        <p>
          The data you will be working with can be found at the links below in three different .zip files:
        </p>
        <div className="DataButtons">
          <Button variant="contained" color="primary">Truck Springs <Icon className="DownloadIcon">cloud_download</Icon></Button>
          <Button variant="contained" color="primary">Brake Shoes <Icon className="DownloadIcon">cloud_download</Icon></Button>
          <Button variant="contained" color="primary">Wheels <Icon className="DownloadIcon">cloud_download</Icon></Button>
        </div>
        <p>
          For <b>Truck Springs</b> the zip contains three sub folders: <i>training</i>, <i>testing</i>, and <i>validation</i>. Each of those contains images of Truck Springs sorted into <i>normal</i> and <i>broken</i> folders based on their label.
          All of the images are equalized. The distribution between the labels is balanced and it is highly unlikely that there are incorrectly labeled images.
          The number of images in each category is broken down in the table below:
        </p>
        <p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>training</TableCell>
                <TableCell>testing</TableCell>
                <TableCell>validation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>normal</TableCell>
                <TableCell>2500</TableCell>
                <TableCell>500</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>broken</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>250</TableCell>
                <TableCell>25</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </p>
        <p>
          <span class="ImageInfo">Average Size of Image: <b>300x150px</b></span>
          <span class="ImageInfo">Total Size of Folder: <b>1.4GB</b></span>
        </p>
        <p>
          For <b>Brake Shoes</b> the zip contains two sub folders: <i>training</i> and <i>testing</i>. Each of those contains images of Brake Shoes sorted into <i>normal</i> and <i>thin</i> folders based on their labels.
          Some of the images are equalized. The distribution between labels is unbalanced and there is a chance of incorrectly labeled images.
          The number of images in each category is broken down in the table below:
        </p>
        <p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>training</TableCell>
                <TableCell>testing</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>normal</TableCell>
                <TableCell>2500</TableCell>
                <TableCell>500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>thin</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </p>
        <p>
          <span class="ImageInfo">Average Size of Image: <b>300x150px</b></span>
          <span class="ImageInfo">Total Size of Folder: <b>1.4GB</b></span>
        </p>
        <p>
          For <b>Wheels</b> the zip contains two sub folders: <i>all_wheels</i> and <i>defect_wheels</i>. None of the images are equalized, each image is exactly as captured. The distribution of labels is not balanced at all and
          there is a good chance of defects being contained in the <i>all_wheels</i> folder.
          The number of images in each category is broken down in the table below:
        </p>
        <p>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>all_wheels</TableCell>
                <TableCell>defect_wheels</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>150000</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </p>
        <p>
          <span class="ImageInfo">Average Size of Image: <b>300x150px</b></span>
          <span class="ImageInfo">Total Size of Folder: <b>1.4GB</b></span>
        </p>
      </div>
    ); 
  }
} 