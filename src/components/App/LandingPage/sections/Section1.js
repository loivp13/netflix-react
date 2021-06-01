import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import StreamingLogoImage from "../../../../img/streamingLogo.png";

class Section1 extends Component {
  render() {
    return (
      <div className="section1">
        <div className="section1__backgroundImage" />
        <div className="section1__header">
          <div className="">
            <img src={StreamingLogoImage} alt="" />
          </div>
          <div className="section1__signinBtn">
            <Link to="/signin">
              <button className="btn btn--red btn-third--1">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn--black btn-third--2">Sign Up</button>
            </Link>
            <Link to="/browse">
              <button className="btn btn--clear btn-third--3">Try Now</button>
            </Link>
          </div>
        </div>
        <div className="section1__body">
          <h1 className="section1__text-main">
            Unlimited movies, TV shows, and more.
          </h1>
          <div className="section1__text-secondary">
            Watch anywhere. Cancel anytime
          </div>
          <div className="section1__freeTrialBtn">
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
          </div>
        </div>
        <div className="hr--grey"></div>
      </div>
    );
  }
}

export default Section1;
