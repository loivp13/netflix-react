import React, { Component } from "react";
import { toggleContentDetails } from "../../redux/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ContentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }
  componentDidMount() {}
  render() {
    let { contentDetails } = this.props;
    let matchRatingColor = rating => {
      let className = "ContentDetails__score--";
      switch (true) {
        case rating > 69:
          return className + "green";
        case rating < 50:
          return className + "red";
        default:
          return className + "yellow";
      }
    };
    return (
      <div className="ContentDetails">
        <div className="ContentDetails__top">
          <div className="ContentDetails__title">{contentDetails.Title}</div>
          <div
            className="ContentDetails__closeButton"
            onClick={() => {
              this.props.toggleContentDetails({}, null);
            }}
          >
            <button className="btn btn--fullTransparent">
              <FontAwesomeIcon
                className=""
                icon={["far", "times-circle"]}
                size="2x"
              />
            </button>
          </div>
        </div>

        <div className="ContentDetails__middle">
          <div className="ContentDetails__left">
            <div className="ContentDetails__infoSnippet">
              <div
                className={matchRatingColor(+contentDetails.imdbRating * 10)}
              >
                {+contentDetails.imdbRating
                  ? +contentDetails.imdbRating * 10
                  : 0}
                % Match
              </div>
              <div className="">{contentDetails.Released}</div>
              <div className="ContentDetails__infoSnippet--rating">
                {contentDetails.Rated}
              </div>
              <div className="">
                {" "}
                {+contentDetails.totalSeasons
                  ? `Seasons: ${contentDetails.totalSeasons}`
                  : "Movie"}
              </div>
            </div>

            <div className="ContentDetails__plot">
              {contentDetails.description}
            </div>

            <div className="ContentDetails__buttonGroup">
              <div className="ContentDetails__buttonGroup--play">
                <button className="btn btn--red">
                  <FontAwesomeIcon
                    className=""
                    icon={["fas", "play"]}
                    size="2x"
                  />{" "}
                  Play
                </button>
                <button className="btn btn--black">
                  <FontAwesomeIcon
                    className=""
                    icon={["fas", "check"]}
                    size="2x"
                  />{" "}
                  My list
                </button>
                <div className="">
                  <FontAwesomeIcon
                    className=""
                    icon={["far", "thumbs-up"]}
                    size="2x"
                  />
                </div>
                <div className="">
                  <FontAwesomeIcon
                    className=""
                    icon={["far", "thumbs-down"]}
                    size="2x"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ContentDetails__right">
            <div className="ContentDetails__image">
              <img src={contentDetails.Poster} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contentDetails: state.contentDetails.contentDetails
  };
};

export default connect(
  mapStateToProps,
  { toggleContentDetails }
)(ContentDetails);
