import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SectionViewHalf extends Component {
  render() {
    let isReverseRow = () => {
      return this.props.reverse ? "sectionViewHalf--reverse" : "";
    };
    return (
      <div className="sectionViewHalf u-margin-top-medium ">
        <div className={`sectionViewHalf__container ${isReverseRow()}`}>
          <div className="sectionViewHalf--left">
            <h1 className="sectionViewHalf__header">{this.props.header}</h1>
            <div className="sectionViewHalf__text">{this.props.text}</div>
            <button className="btn btn--black btn--sharpEdge btn--large">
              Try 30 days free{" "}
              <FontAwesomeIcon
                icon={["fas", "long-arrow-alt-right"]}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="sectionViewHalf--right">{this.props.image}</div>
        </div>
        <div className="hr--grey u-margin-bottom-medium"></div>
      </div>
    );
  }
}

export default SectionViewHalf;
