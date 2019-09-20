import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

export class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    const renderError = ({ error, touched }) => {
      if (touched && error) {
        return (
          <div className="text-red text-font-small">
            <div className="header u-margin-bottom-small">{error}</div>
          </div>
        );
      }
    };
    const renderField = ({
      classes,
      placeholder,
      input,
      label,
      type,
      meta
    }) => (
      <div className="">
        <input
          {...input}
          id={this.props.id}
          type={type}
          className={classes}
          placeholder={placeholder}
        />
        {renderError(meta)}
      </div>
    );

    return (
      <form className="step3">
        <div className="step3--banner bg-blue text-white">
          {" "}
          Enjoy your first month. <span>It's free. </span>
        </div>
        <div className="step2__header">
          <div className="step2__header--1"> Step 3 of 3</div>
          <div className="step2__header--2">
            Sign up to start your free month
          </div>
          <div className="step2__header--3">
            <div className="">Just two more steps and you're done!</div>
            <div className=""> We hate paperwork, too.</div>
            <div className="text-bold u-margin-top-small">
              {" "}
              Create your account.
            </div>
          </div>
        </div>
        <div className="step3--formBox">
          <Field
            name="email"
            type="input"
            component={renderField}
            classes="step3--formBox--input "
            placeholder="Email"
          ></Field>
          <Field
            name="password"
            type="password"
            component={renderField}
            classes="step3--formBox--input"
            placeholder="Password"
          ></Field>
        </div>
        <Link to="/browse">
          <button className="btn--red btn--full u-margin-top-small u-margin-bottom-small">
            Continue
          </button>
        </Link>
      </form>
    );
  }
}
let mapStateToProps = (state, ownProps) => {
  return { selected: state.form.wizard.values.tier };
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  validate
})(Step3);
