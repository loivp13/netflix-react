import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
export class SignIn extends Component {
  render() {
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
      meta,
      fieldClass
    }) => (
      <div className={fieldClass}>
        <input
          {...input}
          id={this.props.id}
          type={type}
          className={classes}
          placeholder={placeholder}
          checked={true}
        />
        <label className={fieldClass} htmlFor={this.props.id}>
          {label}
        </label>
        {renderError(meta)}
      </div>
    );
    return (
      <div className="SignIn">
        <div className="SignIn__bgImage">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6ee654fe-e29e-483e-bd5b-2de9d84033c0/fa3c3d1a-f3e2-47d8-bd06-ed3ce5d617b1/US-en-20190909-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
        <div className="signIn--header">
          <svg
            viewBox="0 0 111 30"
            className="section1__logo"
            focusable="false"
          >
            <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" />
          </svg>
        </div>
        <div className="SignIn__box">
          <div className="SignIn__transparentBox"></div>
          <div className="SignIn__box--main">
            <div className="SignIn__box--title">Sign In</div>
            <form action="#" className="SignIn__form">
              <Field
                name="email"
                type="input"
                component={renderField}
                classes="SignIn--input__email"
                placeholder="Email"
              ></Field>
              <Field
                name="password"
                type="input"
                component={renderField}
                classes="SignIn--input__password"
                placeholder="Password"
              ></Field>
              <button className="btn--red btn--full u-margin-bottom-small u-margin-top-medium">
                Sign In
              </button>
              <Field
                fieldClass="SignIn--checkbox"
                name="rememberMe"
                type="checkbox"
                component={renderField}
                classes="SignIn--input__rememberMe"
                label={"Remember Me"}
                checked={true}
              ></Field>
            </form>
          </div>
          <div className="SignIn__box--footer">
            New to Netflix?{" "}
            <em>
              <Link to="/signup">Sign up now.</Link>
            </em>
          </div>
        </div>
        <div className="SignIn__footer">
          <div className="SignIn__footer--transparentBox"></div>
          <div className="SignIn__footer--header">
            Questions? Call 1-866-579-7172
          </div>
          <div className="SignIn__footer--body">
            <div className="SignIn__footer--item">Gift Card Terms</div>
            <div className="SignIn__footer--item">Terms of Use</div>
            <div className="SignIn__footer--item">Privacy Statement</div>
          </div>
        </div>
      </div>
    );
  }
}

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
})(SignIn);
