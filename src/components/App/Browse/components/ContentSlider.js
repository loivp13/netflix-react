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
      width: 0,
      firstBox: 0,
      lastBox: 0,
      totalBoxes: 0
    };
    this.ContentRowElem = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.size.width !== this.props.size.width) {
      this.onWidthScale();
    }
  }
  componentWillMount() {
    this.onWidthScale();
  }

  //setState for translateCSS fix for

  //setState for Sliding computation
  onWidthScale = () => {
    let { width } = this.props.size;
    console.log(width);
    switch (true) {
      case width > 1092.63:
        return this.setState({
          totalSection: 150,
          width: width,
          moveRight: 0,
          firstBox: 0,
          lastBox: 5,
          totalBoxes: 6
        });
      case width <= 1092.63 && width > 883:
        return this.setState({
          totalSection: 200,
          width: width,
          moveRight: 0,
          firstBox: 0,
          lastBox: 4,
          totalBoxes: 5
        });
      case width <= 883 && width > 583:
        return this.setState({
          totalSection: 275,
          width: width,
          moveRight: 0,
          firstBox: 0,
          lastBox: 3,
          totalBoxes: 4
        });
      default:
        return this.setState({
          totalSection: 400,
          width: width,
          moveRight: 0,
          firstBox: 0,
          lastBox: 2,
          totalBoxes: 3
        });
    }
  };

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
    let { section, totalSection, moveRight, totalBoxes } = this.state;
    let { width } = this.props.size;
    console.log(section, totalSection, moveRight);

    if (section === totalSection) {
      return this.setState({
        moveRight: 0,
        section: 0,
        firstBox: 0,
        lastBox: totalBoxes
      });
    }
    let newSection = section + 100;
    console.log(section);

    if (newSection <= totalSection) {
      this.setState({
        section: newSection,
        moveRight: this.calculateTranslateX(newSection, width),
        firstBox: this.calculateFirstBox(),
        lastBox: this.calculateLastBox()
      });
    } else {
      this.setState({
        section: totalSection,
        moveRight: this.calculateTranslateX(totalSection, width),
        firstBox: this.calculateFirstBox("+%"),
        lastBox: 14
      });
    }
  };
  calculateTranslateX = (section, width) => {
    let calc = (section / 100) * width;
    return calc;
  };
  calculateFirstBox = sign => {
    //if sign is '+' next button has been click else prev clicked
    let { firstBox, totalBoxes } = this.state;
    switch (sign) {
      case "+%":
        return 14 - totalBoxes + 1;
      default:
        return firstBox + totalBoxes;
    }
  };
  calculateLastBox = sign => {
    //if sign is '+' next button has been click else prev clicked
    let { lastBox, totalBoxes, section, totalSection } = this.state;
    switch (sign) {
      case "+%":
        return;
      default:
        if (section === totalSection) {
          return 14;
        } else {
          return lastBox + totalBoxes;
        }
    }
  };
  render() {
    const renderContentRow = () => {
      let { moveRight, firstBox, lastBox } = this.state;
      let { data, id } = this.props;
      return (
        <ContentRow
          moveRight={moveRight}
          ref={el => (this.el = el)}
          data={data}
          id={id}
          firstBox={firstBox}
          lastBox={lastBox}
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
