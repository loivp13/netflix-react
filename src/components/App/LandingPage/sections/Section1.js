import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Section1 extends Component {
  render() {
    return (
      <div className="section1">
        <div className="section1__backgroundImage" />
        <div className="section1__header">
          <div className="">
            <svg
              viewBox="0 0 111 30"
              className="section1__logo"
              focusable="false"
            >
              <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" />
            </svg>
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
