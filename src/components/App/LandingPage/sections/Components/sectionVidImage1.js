import React, { Component } from "react";

export class sectionVidImage1 extends Component {
  render() {
    return (
      <div className="sectionVidImage1">
        <div className="sectionVidImage1__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            className="sectionVidImage1--backImage"
          />
          <div className="sectionVidImage1__animationImage">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
              className="sectionVidImage1__thumbnail"
            />
            <div className="sectionVidImage1__text">
              <div className="">Stranger Things</div>
              <div className="text-blue">Downloading...</div>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt=""
              className="sectionVidImage1__download"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default sectionVidImage1;
