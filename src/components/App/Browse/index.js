import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import ContentSlider from "./components/ContentSlider";
import ContentSliderProd from "./components/ContentSliderProd";
import ContentDetails from "./components/ContentDetails";

import { connect } from "react-redux";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.size = React.createRef();
  }
  componentDidMount() {
    this.setState({ width: this.size.current.clientWidth });
  }
  render() {
    let env = "dev";

    let generateContentDetails = index => {
      if (this.props.contentDetails.id === index) {
        return <ContentDetails></ContentDetails>;
      }
    };

    let generateContentSlider = () => {
      return this.props.videos.map((x, index) => (
        <React.Fragment key={index + 1000}>
          <div className="Browse__MeasureContent" ref={this.size}>
            <ContentSlider
              width={this.state.width}
              key={index}
              data={x}
              id={index}
            ></ContentSlider>
          </div>
          {generateContentDetails(index)}
        </React.Fragment>
      ));
    };

    const generateSliders =
      env === "dev"
        ? () => {
            return generateContentSlider();
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
    videos: state.videos.videos,
    contentDetails: state.contentDetails
  };
};

export default connect(mapStateToProps)(Browse);
