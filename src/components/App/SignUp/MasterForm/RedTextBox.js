import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class RedTextBox extends Component {
  render() {
    const removeGrayStyle = tier => {
      if (tier === this.props.text) {
        return "removeGrey";
      } else {
        return "working";
      }
    };
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <div className={`${removeGrayStyle(this.props.color)} redTextBox`}>
          <input
            {...input}
            id={this.props.id}
            type={type}
            className="form__radio--input"
          />
          {this.props.text}
        </div>
        <div
          className={`${removeGrayStyle(this.props.color)} arrow-down`}
        ></div>
      </div>
    );

    return (
      <div action="">
        <Field
          name={this.props.name}
          type="radio"
          component={renderField}
          value={this.props.text}
          checked={this.props.selected}
        ></Field>
      </div>
    );
  }
}

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false
})(RedTextBox);
