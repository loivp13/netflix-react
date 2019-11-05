import React, { Component } from "react";
import ContentBox from "./ContentBox";

export class ContentRow extends Component {
  render() {
    const generateContentBox = () => {
      return this.props.data.map(x => {
        return (
          <ContentBox
            id={this.props.id}
            snippet={x.snippet}
            key={x.id.videoId}
          ></ContentBox>
        );
      });
    };
    return <div className="ContentRow">{generateContentBox()}</div>;
  }
}

export default ContentRow;
