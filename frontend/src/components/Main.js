import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <div>
        {}
        <Route path="/" component={Home} />
        <Route path="/calculate" component={Home} />
      </div>
    );
  }
}

export default Main;
