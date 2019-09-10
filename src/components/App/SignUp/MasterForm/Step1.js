import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";

export class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="step1">
        <div className="step1__container">
          <div className="step1__title">
            <div className="step1__icon">
              <FontAwesomeIcon icon={["far", "check-circle"]}></FontAwesomeIcon>
            </div>
            <div className="step1__text--parapraph">Step 1 of 3</div>
            <div className="step1__text--header">Choose your plan.</div>
          </div>
          <div className="step1__text--item">
            <div className="step1__icon--check">
              <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
            </div>
            You won't be charged until after your free month.
          </div>
          <div className="step1__text--item">
            <div className="step1__icon--check">
              <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
            </div>
            We'll remind you three days before your trial ends.
          </div>
          <div className="step1__text--item">
            <div className="step1__icon--check">
              <FontAwesomeIcon icon={["fas", "check"]}></FontAwesomeIcon>
            </div>
            No commitments, cancel anytime.
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.next();
            }}
            className="btn btn--red btn--large"
          >
            See the plans
          </button>
        </div>
      </div>
    );
  }
}

export default Step1;
