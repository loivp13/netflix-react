import React, { Component } from "react";
import ContentRow from "./ContentRow";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0
    };
  }
  componentDidMount() {}
  render() {
    const renderContentRow = () => {
      return (
        <React.Fragment>
          <ContentRow data={this.props.data} id={this.props.id}></ContentRow>
        </React.Fragment>
      );
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
const mapStateToProps = (state, ownProps) => {
  return {};
};
export default connect(mapStateToProps)(ContentSlider);
