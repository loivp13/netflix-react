import React, { Component } from "react";
import { signUp } from "../../redux/actions";
import { connect } from "react-redux";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    };

    this;
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    if (currentStep > 3) {
      currentStep = 3;
    } else {
      currentStep = currentStep + 1;
    }

    this.setState({ currentStep: currentStep });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep = currentStep - 1;
    }

    this.setState({
      currentStep: currentStep
    });
  };

  render() {
    return (
      <div className="masterForm text-black">
        <Step1
          currentStep={this.state.currentStep}
          next={this._next}
          prev={this._prev}
        ></Step1>
        <Step2
          currentStep={this.state.currentStep}
          next={this._next}
          prev={this._prev}
        ></Step2>
        <Step3
          currentStep={this.state.currentStep}
          next={this._next}
          prev={this._prev}
        ></Step3>
      </div>
    );
  }
}

export default MasterForm;
