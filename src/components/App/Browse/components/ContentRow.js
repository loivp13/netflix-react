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
