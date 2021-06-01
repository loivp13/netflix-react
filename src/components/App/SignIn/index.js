import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
("../../../../img/streamingLogo.png");
import StreamingLogoImage from "../../../img/streamingLogo.png";
import Warning from "../Warning";
import Disclaimer from "../Disclaimer";
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
      fieldClass,
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
            src={
              "https://assets.nflxext.com/ffe/siteui/vlv3/6ee654fe-e29e-483e-bd5b-2de9d84033c0/fa3c3d1a-f3e2-47d8-bd06-ed3ce5d617b1/US-en-20190909-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            }
            alt=""
          />
        </div>
        <Link to="/">
          <div className="SignIn--header">
            <img src={StreamingLogoImage} alt="" />
          </div>
        </Link>

        <div className="SignIn__box">
          <div className="SignIn__transparentBox"></div>
          <div className="SignIn__box--main">
            <div className="SignIn__box--title">Sign In</div>
            <Warning></Warning>

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
                type="password"
                component={renderField}
                classes="SignIn--input__password"
                placeholder="Password"
              ></Field>
              <Link to="/browse">
                <button
                  type={"button"}
                  className="btn--red btn--full u-margin-bottom-small u-margin-top-medium"
                >
                  Sign in
                </button>
              </Link>
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
            New to Streaming?{" "}
            <em>
              <Link to="/signup">Sign up now.</Link>
            </em>
            <Disclaimer></Disclaimer>
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

const validate = (values) => {
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
  validate,
})(SignIn);
