import React, { Component } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

export class DefectProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          Train derailments are can be a catastrophic event for the railroad.
          They incur large monetary costs to Union Pacific and can cause major
          delays for customers, environmental damage, and even loss of life.
          It's very important, both for business and the communities UP serves,
          that these derailments be mitigated.
        </p>
        <p>
          Regular train inspections are one way UP works to keep trains safe,
          but they require trains to stop and have someone walk up and down the
          sides looking for issues. This is both a time sink and people can
          easily miss small issues when trying to finish the inspection as fast
          as possible. Enter InAdvance, a computer vision based system that
          allows trains to be inspected before reaching the yards. InAdvance
          works by taking long pictures, called line scans, of the sides of the
          cars as they move by at speeds up to 70mph. Object detection
          algorithms are then run on these images to find the relevant
          parts of the train for inspections.
        </p>
        <p>
          For this problem you will be looking at developing algorithms for this system to find
          increasingly difficult defects in three different train car parts:
        </p>
        <ol>
          <li>Truck Springs</li>
          <li>Brake Shoes</li>
          <li>Wheels</li>
        </ol>
        <p>
          You should think creatively about how to efficiently and effectively detect these defects.
          Your solutions will be judged based on how well you accomplish this, and for how many defects you 
          are able to create solutions. The difficulty ramps up, but make sure you get good solutions for the 
          easier ones first! Good luck!
        </p>
        <div className="ContentHeader">Background</div>
        <p>
          Due to the intense processing requirements of this problem, there will be Google Cloud VMs to use with a fast CPU, 
          a good amount of RAM, and a K80 GPU. There are 8 available. So depending on the number of teams, either each team will have a box to work with or slots of time 
          will be setup for teams to use them. Please pay attention in the <i>#defects</i> channel on the Discord server for updates. 
          These will become available sometime after the hackathon begins.
        </p>
        <p>
          To use one of these boxes, please talk to Andrew or Dan or post in the <i>#defects</i> channel. 
          You will be given three piece of information: a username, password, and ssh key. 
          To ssh into the box on Windows we recommend you use PuTTY. On Mac or Linux you should be able to use the standard ssh cmd
          tool. If you have any issues logging in, or are unfamiliar with how to use ssh please ask for help!
        </p>
        <div className="ContentHeader">Data</div>
        <p>
          The data you will be working with can be found at the links below in
          four different .zip files:
        </p>
        <div className="DataButtons">
          <a href="https://storage.googleapis.com/hack-bucket/TruckSpring.zip">
            <Button color="primary">
              Truck Springs <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
          <a href="https://storage.googleapis.com/hack-bucket/BrakeShoe.zip">
            <Button color="primary">
              Brake Shoes <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
          <a href="">
            <Button color="primary">
              Wheels 1 <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
          <a href="">
            <Button color="primary">
              Wheels 2 <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
        </div>
        <p>
          For <b>Truck Springs</b> the zip contains three sub folders:
          <i>training</i>, <i>testing</i>, and <i>validation</i>. Each of those
          contains images of Truck Springs sorted into <i>normal</i> and
          <i>broken</i> folders based on their label. All of the images are
          equalized. The distribution between the labels is balanced and it is
          highly unlikely that there are incorrectly labeled images. The large number of
          normal images in validation is to simulate the rarity of the broken Springs
          on real trains. The number of images in each category is broken down in the table below:
        </p>
        <div className="DataTable">
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
                <TableCell>1200</TableCell>
                <TableCell>250</TableCell>
                <TableCell>1708</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>broken</TableCell>
                <TableCell>1184</TableCell>
                <TableCell>231</TableCell>
                <TableCell>73</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>
          <span className="ImageInfo">
            Rough Size of Images: <b>150x300px</b>
          </span>
          <span className="ImageInfo">
            Total Size of Folder: <b>163MB</b>
          </span>
        </p>
        <p>
          For <b>Brake Shoes</b> the zip contains two sub folders:
          <i>training</i> and <i>testing</i>. Each of those contains images of
          Brake Shoes sorted into <i>normal</i> and <i>thin</i> folders based on
          their labels. Some of the images are equalized. The distribution
          between labels is unbalanced and there is a chance of incorrectly
          labeled images. The number of images in each category is broken down
          in the table below:
        </p>
        <div className="DataTable">
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
                <TableCell>200</TableCell>
                <TableCell>49</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>
          <span className="ImageInfo">
            Rough Size of Images: <b>360x400px</b>
          </span>
          <span className="ImageInfo">
            Total Size of Folder: <b>376MB</b>
          </span>
        </p>
        <p>
          For <b>Wheels</b>, the dataset has been split up into two zips which contain 
          two sub folders: <i>all_wheels</i> and <i>defect_wheels</i>. This was done due to the
          large size of the wheel dataset. Feel free to use only the first set. None of the images 
          are equalized, each image is exactly as captured. The distribution of labels is not balanced at
          all and there is a good chance of defects being contained in the <i>all_wheels</i> folder. 
          The number of images in each category is broken down in the table below:
        </p>
        <div className="DataTable">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Set</TableCell>
                <TableCell>all_wheels</TableCell>
                <TableCell>defect_wheels</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>10000</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>20000</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>
          <span className="ImageInfo">
            Rough Size of Images: <b>1200x1200px</b>
          </span>
          <span className="ImageInfo">
            Total Size of Folder: <b>10GB</b> & <b>20GB</b>
          </span>
        </p>
      </div>
    );
  }
}
