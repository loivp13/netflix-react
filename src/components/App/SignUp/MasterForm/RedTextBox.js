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
    const renderError = ({ error, touched }) => {
      if (touched && error) {
        return (
          <div className="text-red text-font-small">
            <div className="header u-margin-bottom-small">{error}</div>
          </div>
        );
      }
    };
    const renderField = ({ input, label, type, meta }) => (
      <div>
        <div className={`${removeGrayStyle(this.props.color)} redTextBox`}>
          <input
            {...input}
            id={this.props.id}
            type={type}
            className="form__radio--input"
          />
          {this.props.text}
          {renderError(meta)}
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
const validate = value => {
  const errors = {};
  console.log(value);

  if (!value) {
    errors.tier = "Please select one";
  }
  return errors;
};
export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  validate
})(RedTextBox);
