import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import ContentSlider from "./components/ContentSlider";
import ContentSliderProd from "./components/ContentSliderProd";
import { connect } from "react-redux";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let env = "dev";
    let generateContentSlider = () => {
      return this.props.videos.map((x, index) => (
        <ContentSlider key={index} data={x}></ContentSlider>
      ));
    };

    const generateSliders =
      env === "dev"
        ? () => {
            return <React.Fragment>{generateContentSlider()}</React.Fragment>;
          }
        : () => {
            return <ContentSliderProd></ContentSliderProd>;
          };
    return (
      <div className="browse">
        <div className="browse__navbar">
          <Navbar></Navbar>
          <Billboard></Billboard>
          {generateSliders()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videos.videos
  };
};

export default connect(mapStateToProps)(Browse);
