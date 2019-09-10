import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export class Section2 extends Component {
  render() {
    return (
      <div className="section2">
        <h1 className="section2__header--1">All of Netflix.</h1>
        <h1 className="section2__header--2">Free for 30 days.</h1>
        <div className="section2__billingGraph">
          <div className="section2__billingGraph--1">
            <div className="section2__dates--1 text-green">Free 30 days</div>
            <div className="section2__dates--2">
              <div className="section2__dates--firstBillText">First Bill</div>
              <div className="section__dates--firstDate">9/25</div>
            </div>
            <div className="section2__dates--3">
              <div className="section2__dates--secondDate">10/25</div>
            </div>
          </div>
          <div className="section2__timeline"></div>
          <div className="section2__billingGraph--2">
            <span className="section2__icon--envelope">
              <FontAwesomeIcon
                className=""
                icon={["fas", "envelope"]}
              ></FontAwesomeIcon>
            </span>{" "}
            <div className="section2__reminder">3 day reminder</div>
          </div>
        </div>
        <div className="section2__reminderPromise">
          We'll email you a reminder three days before your trial ends. Cancel
          anytime before 9/21 and you won't be charged.
        </div>
        <Link to="/browse">
          <button className="btn btn--red btn--large">
            Try 30 days free{" "}
            <span>
              <FontAwesomeIcon
                className=""
                icon={["fas", "long-arrow-alt-right"]}
                size="lg"
              />
            </span>
          </button>
        </Link>
        <div className="hr--grey"></div>
      </div>
    );
  }
}

export default Section2;
