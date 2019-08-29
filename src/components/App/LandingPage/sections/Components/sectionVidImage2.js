import React, { Component } from "react";

export class sectionVidImage2 extends Component {
  render() {
    return (
      <div className="vidImage2">
        <div className="vidImage2__container">
          <div className="vidImage2--background">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
              className=""
            />
          </div>
          <div className="vidImage2--foreground">
            <video controls autoPlay muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
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

export default sectionVidImage2;
