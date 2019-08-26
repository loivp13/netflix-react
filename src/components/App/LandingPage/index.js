import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { persistStore } from "redux-persist";
import { connect } from "react-redux";
import { PURGE } from "redux-persist";
import history from "../../../history";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";

export class LandingPage extends Component {
  purgeState = e => {
    e.preventDefault();
    this.props.dispatch({
      type: PURGE,
      key: "root",
      result: () => {}
    });
  };

  render() {
    let renderPurgeButton = () => {
      console.log(process.env.API_URL);
      return process.env.API_URL === "dev" ? (
        <div className="purge">
          <button onClick={this.purgeState} className="btn--red">
            purge
          </button>
        </div>
      ) : (
        []
      );
    };

    return (
      <div className="LandingPage">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        {renderPurgeButton()}
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return { dispatch: state.dispatch };
};
export default connect(mapStateToProps)(LandingPage);
