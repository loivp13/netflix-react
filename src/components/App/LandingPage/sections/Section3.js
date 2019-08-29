import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionViewHalf from "./Components/SectionViewHalf";
import VidImage1 from "./Components/sectionVidImage1";
import VidImage2 from "./Components/sectionVidImage2";
import VidImage3 from "./Components/sectionVidImage3";

export class Section3 extends Component {
  render() {
    return (
      <div className="section3">
        <SectionViewHalf
          header={"Enjoy on your TV"}
          text={
            "Watch on Smart TVs, Playstation, Xbox, ChromeCast, Apple TV, Blu-ray players, and more."
          }
          image={<VidImage2></VidImage2>}
        ></SectionViewHalf>
        <SectionViewHalf
          header={"Download your shows to watch on the go"}
          text={"Save your data and watch all your favorites offline."}
          image={<VidImage1></VidImage1>}
          reverse="true"
        ></SectionViewHalf>
        <SectionViewHalf
          header={"Watch everywhere"}
          text={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more"
          }
          image={<VidImage3></VidImage3>}
        ></SectionViewHalf>
      </div>
    );
  }
}

export default Section3;
