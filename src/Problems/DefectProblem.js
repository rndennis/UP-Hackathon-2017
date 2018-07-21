import React, { Component } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import normalspring from './normalspring.png';
import brokenspring from './brokenspring.png';
import normalbrakeshoe from './normalbrakeshoe.png';
import normalthinbrakeshoe from './normalthinbrakeshoe.png';
import thinbrakeshoe from './thinbrakeshoe.png';
import normalwheel from './normalwheel.png';
import defectivewheel from './defectivewheel.png';

export class DefectProblem extends Component {
  render() {
    return (
      <div>
        <div className="ContentHeader">Description</div>
        <p>
          Train derailments are a catastrophic event for the railroad. They
          incur large monetary costs to Union Pacific and can cause major delays
          for customers, environmental damage, and even loss of life. It's very
          important, both for business and the communities UP serves, that these
          derailments be mitigated.
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
          algorithms are then run on these images to find the relevant parts of
          the train for inspections.
        </p>
        <p>
          For this problem you will be developing 3 increasingly difficult
          algorithms for this system to find defects in 3 different train car
          parts:
        </p>
        <ol>
          <li>Truck Springs</li>
          <li>Brake Shoes</li>
          <li>Wheels</li>
        </ol>
        <p>
          You should think creatively about how to efficiently and effectively
          detect these defects. Your solutions will be judged based on how well
          you accomplish this, and for how many defects you are able to create
          solutions. The difficulty ramps up, but make sure you get good
          solutions for the easier ones first! Good luck!
        </p>
        <div className="ContentHeader">Background</div>
        <p>
          <b>Truck Springs</b>: Level 1
        </p>
        <p>
          The least difficult of the 3 defects, Truck Spring, presents a more
          classical computer vision problem, while still being constrained by a
          common industry shortcoming. The classes are balanced and there is
          enough data to work with, but it would still be better if you had
          more. The defects themselves are very clear, showing up as cracks in
          the springs or compressed rings. It is quite easy to tell when a
          spring is <i>broken</i> vs. <i>normal</i>. This solid distinction
          presents a clear feature to work towards identifying, something that
          you won't have with the second defect.
        </p>
        <div className="ImageWrapper">
          <div className="Image">
            <img src={normalspring} alt="Normal Spring" height="400px" />
            <div>
              <small>Normal</small>
            </div>
          </div>
          <div className="Image">
            <img src={brokenspring} alt="Broken Spring" height="400px" />
            <div>
              <small>Broken</small>
            </div>
          </div>
        </div>
        <p>
          <b>Brake Shoes</b>: Level 2
        </p>
        <p>
          Unlike Truck Spring, Brake Shoe presents some added difficulties that
          move it away from the classical classification category. First the set
          is unbalanced. About 1 in 5 Brake Shoes in the data set have been
          labeled <i>thin</i>. The second challenge is that drawing the line
          between what is a <i>normal</i> Brake Shoe and what is a Defective
          Brake Shoe is not clear. The feature that defines the defect is the
          width of the pad (red box area in the images below). <i>Thin</i> Brake
          Shoes are considered a defect when they are <i>REALLY thin</i> or gone
          completely. What is considered <i>REALLY thin</i> is open to
          interpretation and thus a source of bias. So be careful of fully
          trusting the given labels of this dataset. The third challenge with
          this defect is that the images you are given have more "noise". By
          "noise" we mean that only a fraction of the pixels in each image are
          relevant for classifying the image.
        </p>
        <div className="ImageWrapper">
          <div className="Image">
            <img src={normalbrakeshoe} alt="Normal Brake Shoe" height="400px" />
            <div>
              <small>Normal</small>
            </div>
          </div>
          <div className="Image">
            <img src={normalthinbrakeshoe} alt="Normal Brake Shoe" height="400px" />
            <div>
              <small>Normal</small>
            </div>
          </div>
          <div className="Image">
            <img src={thinbrakeshoe} alt="Thin Brake Shoe" height="400px" />
            <div>
              <small>Thin</small>
            </div>
          </div>
        </div>
        <p>
          <b>Wheels</b>: Level 3
        </p>
        <p>
          If you are able to reach this object congratulations! Now prepare to
          REALLY struggle. For Wheels it doesn't even make sense to talk in
          terms of "balanced datasets". There are only 3 <i>defective wheel</i>{' '}
          images, one of which (<i>wheel_emailed_defect.png</i>) is not even in
          the same format as the rest of the images, and 10-30k <i>wheel</i>{' '}
          images. An important distinction between the other objects and this
          one is that there is no guarantee of labels. There are the 3 confirmed
          defects and then the rest are essentially unlabeled. However due to
          the low rate of this type of defect it's safe to assume that it is
          very unlikely that any of the wheels in <i>all_wheels</i> is an image
          of a defect. But if you are unsure please ask! Focus on coming up with
          a solution that does not rely on having a decent, or any, number of
          defect examples. This is a very important type of problem, especially
          here at the railroad.
        </p>
        <div className="ImageWrapper">
          <div className="Image">
            <img src={normalwheel} alt="Normal Wheel" height="400px" />
            <div>
              <small>Normal</small>
            </div>
          </div>
          <div className="Image">
            <img src={defectivewheel} alt="Defective Wheel" height="400px" />
            <div>
              <small>Defective</small>
            </div>
          </div>
        </div>
        <p>
          Due to the potentially intense processing requirements of this
          problem, there will be Google Cloud VMs to use with a fast CPU, a good
          amount of RAM, and a K80 GPU. There are 8 available. So depending on
          the number of teams, either each team will have a box to work with or
          slots of time will be setup for teams to use them. Please pay
          attention in the <i>#defects</i> channel on the Discord server for
          updates. These will become available sometime after the hackathon
          begins.
        </p>
        <p>
          To use one of these boxes, please talk to Andrew or Dan or post in the{' '}
          <i>#defects</i> channel. You will be given 3 pieces of information: a
          username, password, and ssh key. To ssh into the box on Windows we
          recommend you use PuTTY. On Mac or Linux you should be able to use the
          standard ssh cmd tool. If you have any issues logging in, installing
          things, or are unfamiliar with how to use ssh please ask for help!
        </p>
        <div className="ContentHeader">Data</div>
        <p>
          The data you will be working with can be found at the links below in 4
          different .zip files (start the wheel downloads early, they're big):
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
          <a href="https://storage.googleapis.com/hack-bucket/Wheel_1.zip">
            <Button color="primary">
              Wheels 1 <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
          <a href="https://storage.googleapis.com/hack-bucket/Wheel_2.zip">
            <Button color="primary">
              Wheels 2 <i className={['fas', 'fa-download'].join(' ')} />
            </Button>
          </a>
        </div>
        <p>
          For <b>Truck Springs</b> the zip contains 3 sub folders:
          <i>training</i>, <i>testing</i>, and <i>validation</i>. Each of those
          contains images of Truck Springs sorted into <i>normal</i> and
          <i>broken</i> folders based on their label. All of the images are
          equalized. The distribution between the labels is balanced and it is
          highly unlikely that there are incorrectly labeled images. The large
          number of normal images in validation is to simulate the rarity of the
          broken Springs on real trains. The number of images in each category
          is broken down in the table below:
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
          For <b>Brake Shoes</b> the zip contains 2 sub folders:
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
          For <b>Wheels</b>, the dataset has been split up into 2 zips which
          contain 2 sub folders: <i>all_wheels</i> and <i>defect_wheels</i>.
          This was done due to the large size of the wheel dataset. Feel free to
          use only the first set. None of the images have been equalized or
          modified in any way. The distribution of labels is not balanced at
          all. It is possible, but very unlikely that there is a broken wheel in
          the <i>all_wheels</i> folder. The number of images in each category is
          broken down in the table below:
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
            Rough Size of Images: <b>1100x1100px</b>
          </span>
          <span className="ImageInfo">
            Total Size of Folder: <b>10.1GB</b> & <b>20.2GB</b>
          </span>
        </p>
      </div>
    );
  }
}
