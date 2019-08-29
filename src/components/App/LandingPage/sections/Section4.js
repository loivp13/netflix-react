import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Section4 extends Component {
  render() {
    return (
      <div className="section4">
        <h1 className="section4__header">Frequently Asked Question</h1>
        <ul className="section4__list">
          <li className="section4__listitem--1">
            <div className="section4-listitem--text">What is Netflix?</div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
          <li className="section4__listitem--2">
            <div className="section4-listitem--text">
              How much does Netflix cost?
            </div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
          <li className="section4__listitem--3">
            <div className="section4-listitem--text">Where can I watch?</div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
          <li className="section4__listitem--4">
            <div className="section4-listitem--text">How do I cancel?</div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
          <li className="section4__listitem--5">
            <div className="section4-listitem--text">
              What can I watch on Netflix
            </div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
          <li className="section4__listitem--6">
            <div className="section4-listitem--text">
              How does the free trial work?
            </div>
            <span className="section4-listitem--icon">
              <FontAwesomeIcon icon={["fas", "plus"]}></FontAwesomeIcon>
            </span>
          </li>
        </ul>
        <button className="btn btn--large btn--red u-margin-bottom-medium">
          TRY 30 DAYS FREE{" "}
          <FontAwesomeIcon
            className=""
            icon={["fas", "long-arrow-alt-right"]}
          ></FontAwesomeIcon>
        </button>
        <div className="hr--grey"></div>
      </div>
    );
  }
}

export default Section4;
