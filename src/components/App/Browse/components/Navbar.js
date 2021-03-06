import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoFlexContainer from "../../HOCs/AutoFlexContainer";
import { withSize } from "react-sizeme";
import { faThemeisle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
        <div className="navbar__right">
          <Link to="/">
            <div className="navbar__right--brand">
              <svg
                viewBox="0 0 111 30"
                className="navbar__right--logo"
                focusable="false"
              >
                <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" />
              </svg>
            </div>
          </Link>
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
