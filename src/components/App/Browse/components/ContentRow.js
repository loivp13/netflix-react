import React, { Component } from "react";
import ContentBox from "./ContentBox";

import { withSize } from "react-sizeme";
import { connect } from "react-redux";

export class ContentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSection: 0,
      section: 0,
      moveRight: 0
    };
    this.ContentRowElem = React.createRef();
  }

  componentDidMount() {
    this.ContentRowElem.current.style.transform = `translateX ${this.props.moveRight}px)`;
  }
  componentDidUpdate() {
    this.ContentRowElem.current.style.transform = `translateX(-${this.props.moveRight}px)`;
  }

  render() {
    let { id, firstBox, lastBox, data } = this.props;
    const generateContentBox = () => {
      return data.map((x, i) => {
        return (
          <ContentBox
            id={id}
            snippet={x.snippet}
            key={x.id.videoId}
            firstBox={firstBox === i}
            lastBox={lastBox === i}
          ></ContentBox>
        );
      });
    };
    return (
      <div className="ContentRow" ref={this.ContentRowElem}>
        {generateContentBox()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
export default withSize({ monitorWidth: true })(
  connect(mapStateToProps)(ContentRow)
);
