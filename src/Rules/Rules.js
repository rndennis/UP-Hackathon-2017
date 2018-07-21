import React, { Component } from "react";

import { Paper } from "@material-ui/core";

import "./Rules.css";

class Rules extends Component {
  render() {
    return (
      <Paper>
        <div>
          <div className="ContentHeader">Problem Selection</div>
          <p>
            Every team will be required to commit to a problem by 1:40pm
            Saturday. The problem that you commit to by this time will be the
            problem you must present Sunday morning. To commit to a problem let
            a volunteer know your team name and the problem you're going to work
            on either by messaging them on the Discord or finding one of them in
            person.
          </p>
          <p>
            Between 1:40-2:00pm Saturday teams will have a chance to switch
            problems after seeing how many teams are working on each for
            competitive purposes. We do this due to the judging format this year
            which is discussed below. Again, to switch, please let someone know.
            Once 2:00pm rolls around you are locked into your commitment.
          </p>
          <div className="ContentHeader">Judging and Prizes</div>
          <p>
            Judging will be preformed by a panel of judges composed of three
            judge types. There will be "Executive" judges, who will judge all
            teams across all problems. Then there will be problem specific
            judges, one "Developer" judge and one "Business Partner" judge.
            These judges were chosen due to their expertise on each problem and
            will only judge teams that worked on their assigned problem for the
            Problem Prizes. All judges will be judging according to a rubric of
            four categories:
          </p>
          <ul className="UnstyledList">
            <li>
              <span className="Label">Technicality</span>
              <span>
                The project implementation presents and elegant, efficient, and
                clean solution.
              </span>
            </li>
            <li>
              <span className="Label">Polish</span>
              <span>
                The project is in a highly developed, finished, or refined
                state.
              </span>
            </li>
            <li>
              <span className="Label">Originality</span>
              <span>
                The project presents a fresh perspective on inventive solution.
              </span>
            </li>
            <li>
              <span className="Label">Usefulness</span>
              <span>
                The project presents a fresh perspective or inventive solution.
              </span>
            </li>
          </ul>
          <p>Each category will be assigned a score of 0-10.</p>
          <p>There will be two types of winners:</p>
          <ul className="UnstyledList">
            <li>
              <span className="Label">Problem Prize Winners</span>
              <span>The team with the highest score in each problem.</span>
            </li>
            <li>
              <span className="Label">Grand Prize Winners</span>
              <span>
                All three of the Problem Prize Winners will reviewed by all
                judges and ordered 1st-3rd. The team with the most 1st choices
                will be declared the Grand Prize Winner and the second place
                team in that problem will become the Problem Prize Winner for
                the respective problem.
              </span>
            </li>
          </ul>

          <p>
            <b>NOTE:</b> In the case that there is only one team in a category
            THEY WILL WIN THE PROBLEM PRIZE BY DEFAULT.
          </p>
          <p>
            <b>NOTE:</b> In the case that there is only one team in a category
            and the are chosen as the Grand Prize Winner. The same process that
            was used to chose the Grand Prize Winner will be used to select the
            "Second Place Prize Winner" and they will be rewarded the remaining
            Problem Prize.
          </p>
        </div>
      </Paper>
    );
  }
}

export default Rules;
