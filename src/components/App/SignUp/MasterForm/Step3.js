import React, { Component } from "react";

export class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return <div>step 3</div>;
  }
}

export default Step3;
