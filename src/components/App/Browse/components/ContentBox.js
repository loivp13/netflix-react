import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleContentDetails } from "../../redux/actions";
import { connect } from "react-redux";

export class ContentBox extends Component {
  constructor(props) {
    super(props);
  }
  cleanTitleString(string) {
    let indexOfPipeChar = string.indexOf("|");
    return string.slice(0, indexOfPipeChar);
  }
  cssCheckForFix = (firstBox, lastBox) => {
    console.log(firstBox, lastBox);
    if (firstBox) {
      return "ContentBox__first";
    } else if (lastBox) {
      return "ContentBox__last";
    } else {
      return "";
    }
  };
  render() {
    let { snippet, firstBox, lastBox } = this.props;

    return (
      <div
        className={`ContentBox ${this.cssCheckForFix(firstBox, lastBox)}`}
        onClick={() => this.props.toggleContentDetails(snippet, this.props.id)}
      >
        <img
          className="ContentBox--image"
          src={snippet.thumbnails.high.url}
          alt=""
        />
        <div className="ContentBox--content">
          <div className="ContentBox--content__left">
            <div className="ContentBox--content__title">
              {" "}
              {this.cleanTitleString(snippet.title)}
            </div>
            <div className="ContentBox--content__description"></div>
          </div>
          <div className="ContentBox--content__right">
            <div className="ContentBox--content__plus">
              <FontAwesomeIcon
                className=""
                icon={["far", "thumbs-up"]}
                size="lg"
              />
            </div>
            <div className="ContentBox--content__minus">
              <FontAwesomeIcon
                className=""
                icon={["far", "thumbs-down"]}
                size="lg"
              />
            </div>
            <div className="ContentBox--content__add">
              <FontAwesomeIcon className="" icon={["fas", "plus"]} size="lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { toggleContentDetails })(ContentBox);
