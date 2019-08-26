import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

import LandingPage from "./LandingPage";
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
