import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";

export class Browse extends Component {
  render() {
    return (
      <div className="browse">
        <div className="browse__navbar">
          <Navbar></Navbar>
          <Billboard></Billboard>
        </div>
      </div>
    );
  }
}

export default Browse;
