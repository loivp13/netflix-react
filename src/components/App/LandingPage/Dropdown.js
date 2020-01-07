import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  handleClick = e => {
    console.log("lc");
    this.setState({ hidden: !this.state.hidden });
  };
  render() {
    let { hidden } = this.state;
    let { question, answer } = this.props;
    let className = "Dropdown__answer";
    let iconClassName = "plus";

    let renderHiddenClass = () => {
      return hidden ? `${className}__hidden` : `${className}__show`;
    };
    let renderIconClass = () => {
      return hidden ? iconClassName : "times";
    };
    return (
      <div
        onClick={e => {
          this.handleClick(e);
        }}
        className="Dropdown"
      >
        <div className="Dropdown__question">
          <div className="section4-listitem--text">{question}</div>
          <span className="section4-listitem--icon">
            <FontAwesomeIcon
              icon={["fas", renderIconClass()]}
            ></FontAwesomeIcon>
          </span>
        </div>
        <div className={`Dropdown__hr ${renderHiddenClass()}`}></div>
        <div className={`Dropdown__answer ${renderHiddenClass()}`}>
          {answer}
        </div>
      </div>
    );
  }
}

export default Dropdown;
