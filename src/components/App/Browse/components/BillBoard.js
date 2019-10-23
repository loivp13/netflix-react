import React, { Component } from "react";
import YouTube from "react-youtube";

class BillBoard extends Component {
  render() {
    const opts = {
      height: "200",
      width: "300",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="Billboard">
        <div className="Billboard--container">
          <div className="Billboard--right">
            <img
              className="Billboard--right--image"
              src="https://occ-0-33-3996.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABYbaLBRPuMwR2PUTdrZ4iZQPAjHHdGqszh79NQASurdvXR2zUPr3pJqSRMZ7bZCGGuQjLFLhuDd5GFPsjoB2roNsX652rGVDvSxzhK3e38otOTQcGZv0_hbYKz9P_NAVBFOO4i9oB70CNm8iqaea2IDqZghnBtOxG-ZvQ3PLEUsQ1w.webp?r=7ec"
              alt=""
            />
            <div className="Billboard--right--btnGroup">
              <button className="btn btn--semiTransparent">
                <div className="btn--text">Play</div>
              </button>
              <button className="btn btn--semiTransparent">
                <div className="btn--text">My List</div>
              </button>
              <button className="btn btn--semiTransparent">
                <div className="btn--text">More Info</div>
              </button>
            </div>
            <h1>Watch Part 2 Now</h1>
            <h2 className="Billboard--right--description">
              Misadventure is her middle anme, Unfortunaely, 'princess' is her
              title. A madcap medieval quest from matt Groening
            </h2>
          </div>
          <div className="Billboard--left">
            <div className="Billboard--left--box">TV-14</div>
          </div>
        </div>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default BillBoard;
