import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Billboard from "./components/BillBoard";
import ContentSlider from "./components/ContentSlider";
import ContentSliderProd from "./components/ContentSliderProd";
import ContentDetails from "./components/ContentDetails";
import Slider from "react-slick";
import ContentBox from "./components/ContentBox";

import { connect } from "react-redux";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      slides: 6,
    };
    this.size = React.createRef();
  }

  updateSlides = () => {
    let width = this.size.current.scrollWidth;

    switch (true) {
      case width > 1092.63:
        return this.setState({
          ...this.state,
          slides: 6,
        });
      case width <= 1092.63 && width > 883:
        return this.setState({
          totalSection: 200,
          ...this.state,
          slides: 5,
        });
      case width <= 883 && width > 583:
        return this.setState({
          ...this.state,
          slides: 4,
        });
      default:
        return this.setState({
          ...this.state,
          slides: 3,
        });
    }
  };
  componentDidMount() {
    this.updateSlides();
    window.addEventListener("resize", () => {
      this.updateSlides();
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  render() {
    let env = "dev";

    let generateContentDetails = (index) => {
      if (this.props.contentDetails.id === index) {
        return <ContentDetails></ContentDetails>;
      }
    };

    let generateContentSlider = () => {
      return this.props.videos.map((x, index) => (
        <React.Fragment key={index + 1000}>
          <div className="Browse__MeasureContent">
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

    //render using slick package

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slides,
      slidesToScroll: this.state.slides,
    };
    let generateSlickSlider = () => {
      return this.props.videos.map((x, index) => (
        <div ref={this.size} className={`SlickSlider`} key={index + 1000}>
          <Slider {...settings}>
            {generateContentBox(x)}
            {generateContentDetails(index)}
          </Slider>
        </div>
      ));
    };
    const generateContentBox = (data) => {
      return data.map((x, i) => {
        return (
          <ContentBox
            id={i}
            snippet={x.snippet}
            key={x.id.videoId}
          ></ContentBox>
        );
      });
    };

    return (
      <div className="browse">
        <div className="browse__navbar">
          <Navbar></Navbar>
          <Billboard></Billboard>
          {/* {generateSliders()} */}
          {generateSlickSlider()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.videos.videos,
    contentDetails: state.contentDetails,
  };
};

export default connect(mapStateToProps)(Browse);
