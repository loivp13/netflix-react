import React, { Component } from "react";
import { Link } from "react-router-dom";

import MasterForm from "./MasterForm";
import SignInFooter from "./SignInFooter";
import StreamingLogoImage from "../../../img/streamingLogo.png";

export class SignIn extends Component {
  render() {
    return (
      <div className="signIn bg-white">
        <div className="signIn-container">
          <div className="signIn--header">
            <div className="SignIn__svg--container">
              <img src={StreamingLogoImage} alt="" />
            </div>
            <div className="signIn__signinBtn">
              <Link to="/signin">
                <button className="btn btn--clear signIn__text--TryNow">
                  Try Now
                </button>
              </Link>
            </div>
          </div>
          <div className="hr--grey3 u-margin-bottom-medium"></div>
          <div className="signIn__body">
            <MasterForm></MasterForm>
          </div>
          <div className="hr--grey3 u-margin-bottom-medium"></div>
          <div className="signIn__footer">
            <SignInFooter></SignInFooter>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
