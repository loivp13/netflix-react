import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoFlexContainer from "../../HOCs/AutoFlexContainer";
import { withSize } from "react-sizeme";
import { faThemeisle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import StreamingLogoImage from "../../../../img/streamingLogo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isCondense: null, isOpen: null };
  }

  calcIsCondense = () => {
    if (this.props.size.width <= 583) {
      return this.setState({ isCondense: true, isOpen: false });
    }
    return this.setState({ isCondense: false, isOpen: true });
  };
  handleBrowseClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  componentDidMount() {
    this.calcIsCondense();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.size.width !== this.props.size.width) {
      this.calcIsCondense();
    }
  }
  render() {
    console.log(this.state);
    const renderItem = () => {
      return this.state.isOpen ? (
        <div className={`navbar__right--list--${this.state.isCondense}`}>
          <div className="navbar__right--home">Home</div>
          <div className="navbar__right--tv">TV Shows</div>
          <div className="navbar__right--movies">Movies</div>
          <div className="navbar__right--recent">Recently Added</div>
          <div className="navbar__right--list">My list</div>
        </div>
      ) : null;
    };
    return (
      <div className="navbar">
        <Link to="/">
          <div className="navbar__right--brand">
            <img src={StreamingLogoImage} alt="" />
          </div>
        </Link>
        <div className="navbar__right">
          <AutoFlexContainer isCondense={this.state.isCondense}>
            <div
              className="navbar__right--browse"
              onClick={this.handleBrowseClick}
            >
              Browse{" "}
              <span>
                <FontAwesomeIcon
                  className=""
                  icon={["fas", "caret-down"]}
                  size="lg"
                />
              </span>
            </div>

            {renderItem()}
          </AutoFlexContainer>
        </div>
        <div className="navbar__left">
          <div className="navbar__left--search">
            <FontAwesomeIcon
              icon={["fas", "search"]}
              size="lg"
            ></FontAwesomeIcon>
          </div>
          <div className="navbar__left--kids">Kids</div>
          <div className="navbar__left--dvd">DVD</div>

          <div className="navbar__left--gift">
            <FontAwesomeIcon icon={["fas", "gift"]} size="lg"></FontAwesomeIcon>
          </div>
          <div className="navbar__left--notifications">
            <FontAwesomeIcon icon={["fas", "bell"]} size="lg"></FontAwesomeIcon>
          </div>
          <div className="navbar__left--account">
            <FontAwesomeIcon icon={["fas", "user"]} size="lg"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default withSize({ monitorWidth: true })(Navbar);
