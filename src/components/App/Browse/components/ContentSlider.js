import React, { Component } from "react";
import ContentRow from "./ContentRow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const renderContentRow = () => {
      return <ContentRow data={this.props.videos}></ContentRow>;
    };

    return (
      <div className="ContentSlider">
        <button className="btn btn--semiTransparent ContentSlider__arrowIcon--left">
          <FontAwesomeIcon
            className=""
            icon={["fas", "long-arrow-alt-left"]}
          ></FontAwesomeIcon>
        </button>
        {renderContentRow()}
        <button className="btn btn--semiTransparent ContentSlider__arrowIcon--right">
          <FontAwesomeIcon
            className=""
            icon={["fas", "long-arrow-alt-right"]}
          ></FontAwesomeIcon>
        </button>
      </div>
    );
  }
}

export default ContentSlider;
