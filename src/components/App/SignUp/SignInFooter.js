import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignInFooter extends Component {
  render() {
    return (
      <div className="signInFooter">
        <div className="signInFooter--container">
          <div className="signInFooter--question">
            Questions? Call 1-866-579-7172
          </div>
          <div className="signInFooter--links">
            <Link to="" className="signInFooter-item--2">
              Help Center
            </Link>
            <Link to="" className="signInFooter-item--1">
              Faq
            </Link>
            <Link to="" className="signInFooter-item--3">
              Terms of Use
            </Link>
            <Link to="" className="signInFooter-item--4">
              Privacy
            </Link>
            <Link to="" className="signInFooter-item--5">
              Cookie Preferences
            </Link>
            <Link to="" className="signInFooter-item--6">
              Corporate Information
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInFooter;
