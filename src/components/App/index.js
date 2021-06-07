import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

import LandingPage from "./LandingPage";
import Browse from "./Browse";
import SignUp from "./SignUp";

const history = createBrowserHistory();

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container AppBody">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/browse" component={Browse}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(App);
