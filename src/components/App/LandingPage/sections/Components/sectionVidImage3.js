import React, { Component } from "react";

export class sectionVidImage3 extends Component {
  render() {
    return (
      <div className="vidImage3">
        <div className="vidImage3__container">
          <div className="vidImage3--background">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
              className=""
            />
          </div>
          <div className="vidImage3--foreground">
            <video controls autoPlay muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                className=""
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default sectionVidImage3;
