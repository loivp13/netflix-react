import React, { Component } from "react";

import RedTextBox from "./RedTextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { timingSafeEqual } from "crypto";

export class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    const checkSelectedBasic = () => {
      console.log(this.props.selected);
      return this.props.selected === "Basic" ? "text-red" : "";
    };
    const checkSelectedStandard = () => {
      return this.props.selected === "Standard" ? "text-red" : "";
    };
    const checkSelectedPremium = () => {
      return this.props.selected === "Premium" ? "text-red" : "";
    };
    return (
      <form className="step2">
        <div className="step2__header">
          <div className="step2__header--1"> Step 2 of 3</div>
          <div className="step2__header--2">
            Choose the plan that's right for you
          </div>
          <div className="step2__header--3">
            Downgrade or upgrade at any time
          </div>
        </div>
        <div className="step2__body">
          <div className="step2__container">
            <div className="step2__row">
              <div className="step2__row--sentence"></div>
              <label
                id="1"
                className={`${checkSelectedBasic()} step2__row--col--1`}
              >
                <RedTextBox
                  text="Basic"
                  name="tier"
                  id="1"
                  color={this.props.selected}
                ></RedTextBox>
              </label>
              <label id="2" className="step2__row--col--2">
                <RedTextBox
                  text="Standard"
                  name="tier"
                  id="2"
                  color={this.props.selected}
                ></RedTextBox>
              </label>
              <label
                id="3"
                className={`${checkSelectedPremium()} step2__row--col--3`}
              >
                <RedTextBox
                  selected={true}
                  text="Premium"
                  name="tier"
                  id="3"
                  color={this.props.selected}
                ></RedTextBox>
              </label>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">
                Monthly price after free month ends on 10/2/19
              </div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                $8.99
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                $12.99
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                $15.99
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">HD available</div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                X
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">Ultra HD available</div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                X
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                X
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">
                Screens you can watch on at the same time
              </div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                1
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                2
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                4
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">
                Watch on your laptop, TV, phone and tablet
              </div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">
                Unlimited movies and TV shows
              </div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">Cancel anytime</div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step2__row">
              <div className="step2__row--sentence">First month free</div>
              <div className={`${checkSelectedBasic()} step2__row--col--1`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedStandard()} step2__row--col--2`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
              <div className={`${checkSelectedPremium()} step2__row--col--3`}>
                <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
              </div>
            </div>
            <div className="step__row">
              HD and Ultra HD availability subject to your Internet service and
              device capabilities. Not all content available in HD or Ultra HD.
              See Terms of Use for more detials{" "}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            this.props.next();
          }}
          className="btn btn--red btn--full"
        >
          Continue
        </button>
      </form>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  if (!state.form.wizard.values) {
    return { selected: "Premium" };
  } else {
    return { selected: state.form.wizard.values.tier };
  }
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "wizard",
    destroyOnUnmount: false
  })(Step2)
);
