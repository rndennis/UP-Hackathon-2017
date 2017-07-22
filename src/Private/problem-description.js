import React from 'react';

import {Table, TableBody, TableHeader, TableRow, TableRowColumn, TableHeaderColumn} from 'material-ui/Table';

export default () => {
  return (
    <div className="Problem">
      <p>
        One of the most important railroad performance metrics at UP is carloadings, or
        the amount of freight loaded into cars during some specified duration of time.
        You may have even seen UP’s daily and 7-day total carloading numbers on display, <a href="https://employees.www.uprr.com/emp/index.shtml">
        notably on the UPRR employee homepage</a>. Your goal in these 24 hours is to develop a model that predicts these numbers.
      </p>
      <p>
        You are given two data sets, <a href="https://s3.amazonaws.com/intern-hackathon-data/training_carloadings.csv">training_carloadings.csv</a> and <a href="https://s3.amazonaws.com/intern-hackathon-data/validation_carloadings.csv">validation_carloadings.csv</a>,
        both of which contain data that looks similar to this:
      </p>
      <div className="Table">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>DATE</TableHeaderColumn>
              <TableHeaderColumn>ACTUAL</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>2000-01-01</TableRowColumn>
              <TableRowColumn>4615</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2000-01-02</TableRowColumn>
              <TableRowColumn>11827</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2000-01-03</TableRowColumn>
              <TableRowColumn>24160</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>...</TableRowColumn>
              <TableRowColumn>...</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="TableFooter">
        (Note that the dates are formatted strings ('YYYY-MM-DD') and predicted carloadings are integers)
      </div>
      <p>
        If you’re unfamiliar with the concept of training and validation data, check out <a href="https://stats.stackexchange.com/questions/19048/what-is-the-difference-between-test-set-and-validation-set">this Stack Exchange post</a>. You should use these data sets, in combination with any additional public data determined by your team, to make your predictions. Think carefully and critically about the additional data you choose to employ; there are many different public data sources out there that could prove useful in training your model. These could include: economic indicators, climate indicators, social indicators, etc. Anything you think might impact UP’s carloading numbers.
      </p>
      <p>
        To get yourself started, we suggest exploring your data. See if you can identify any trends on the surface and try to make sense of them. If you’re not sure where to go from there, start by asking yourself some questions about what could impact the data. The data and variables your team chooses to use and how you approach this problem is a great way to set yourself apart from your competition.
      </p>
      <p>
        A large portion of the judging criteria is based on how well your model performs. Throughout the competition, you will have access to a page where you can submit your predictions. These predictions will be for the date range 2015-01-01 – 2015-12-31 and your deliverable should be a CSV file in the same format as the data files given.
      </p>
      <p>
        A couple hours into the competition, you will be able to submit your CSV file and will receive back a percentage representing your model’s accuracy on the data it’s being compared against. This score will be calculated using <a href="https://en.wikipedia.org/wiki/Mean_absolute_percentage_error">Mean Absolute Percentage Error (MAPE)</a>.
      </p>
      <p>
        At the end of the competition, you will be given a new page to submit your final predictions to. You will be allowed to make one submission and the result will be your final score.
      </p>
      <p>
        Sunday morning, you will present your solution to the judging panel. As there isn’t a well-defined visual component to this problem, how you communicate your solution is up to you. You can present using only slides in a presentation, or you can supplement your slides with web-based data visualizations, etc. <strong>However, we want to emphasize how important it is to communicate how you arrived at your solution (algorithms, libraries, languages) and why you approached your solution the way you did</strong>.
      </p>
    </div>
  );
};
