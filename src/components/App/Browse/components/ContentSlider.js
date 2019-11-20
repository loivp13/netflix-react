import React, { Component, createRef } from "react";
import ContentRow from "./ContentRow";
import { connect } from "react-redux";
import { withSize } from "react-sizeme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSection: 0,
      section: 0,
      moveRight: 0,
      width: 0
    };
    this.ContentRowElem = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.size.width !== this.props.size.width) {
      let { width } = this.props.size;
      console.log(width);
      switch (true) {
        case width > 1092.63:
          return this.setState({ totalSection: 150, width: width });
        case width <= 1092.63 && width > 883:
          return this.setState({ totalSection: 200, width: width });
        case width <= 883 && width > 583:
          return this.setState({ totalSection: 275, width: width });
        default:
          return this.setState({ totalSection: 400, width: width });
      }
    }
  }
  componentWillMount() {
    let { width } = this.props.size;
    switch (true) {
      case width >= 1092.63:
        return this.setState({ totalSection: 150, width: width });
      case width <= 1092.63 && width > 883:
        return this.setState({ totalSection: 200, width: width });
      case width <= 883 && width >= 583:
        return this.setState({ totalSection: 275, width: width });
      default:
        return this.setState({ totalSection: 400, width: width });
    }
  }
  handlePrevClick = () => {
    let { section, totalSection, moveRight, width } = this.state;
    console.log(section, totalSection, moveRight);
    if (section === 0) {
      return this.setState({
        moveRight: this.calculateTranslateX(totalSection, width),
        section: totalSection
      });
    }
    let newSection = section - 100;

    if (newSection < 0) {
      this.setState({
        section: 0,
        moveRight: 0
      });
    } else {
      this.setState({
        section: newSection,
        moveRight: this.calculateTranslateX(newSection, width)
      });
    }
  };
  handleNextClick = () => {
    let { section, totalSection, moveRight } = this.state;
    let { width } = this.props.size;
    console.log(section, totalSection, moveRight);

    if (section === totalSection) {
      return this.setState({ moveRight: 0, section: 0 });
    }
    let newSection = section + 100;
    console.log(section);

    if (newSection <= totalSection) {
      this.setState({
        section: newSection,
        moveRight: this.calculateTranslateX(newSection, width)
      });
    } else {
      this.setState({
        section: totalSection,
        moveRight: this.calculateTranslateX(totalSection, width)
      });
    }
  };
  calculateTranslateX = (section, width) => {
    let calc = (section / 100) * width;
    return calc;
  };
  render() {
    const renderContentRow = () => {
      return (
        <ContentRow
          moveRight={this.state.moveRight}
          ref={el => (this.el = el)}
          data={this.props.data}
          id={this.props.id}
        ></ContentRow>
      );
    };

    return (
      <div className="ContentSlider">
        <button
          className="btn btn--semiTransparent ContentSlider__arrowIcon--left"
          onClick={this.handlePrevClick}
        >
          <FontAwesomeIcon
            className=""
            icon={["fas", "long-arrow-alt-left"]}
          ></FontAwesomeIcon>
        </button>

        {renderContentRow()}

        <button
          className="btn btn--semiTransparent ContentSlider__arrowIcon--right"
          onClick={this.handleNextClick}
        >
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
export default withSize({ monitorWidth: true })(
  connect(mapStateToProps)(ContentSlider)
);
