import React, { Component } from "react";
import ContentRow from "./ContentRow";
import { connect } from "react-redux";
import { setMergeData } from "../../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ContentSliderProd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.setMergeData();
  }
  render() {
    return (
      <div className="ContentSlider">
        <button className="btn btn--semiTransparent ContentSlider__arrowIcon--left">
          <FontAwesomeIcon
            className=""
            icon={["fas", "long-arrow-alt-left"]}
          ></FontAwesomeIcon>
        </button>
        <ContentRow></ContentRow>
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

const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps, { setMergeData })(ContentSliderProd);
