import "nprogress/nprogress.css";

import React, { Component } from "react";

import Nprogress from "nprogress";

class AsyncWrapper extends Component {

  constructor() {
    super();
    this.state = {
      req: "loading"
    };
  }

  componentDidMount() {
    const { promise } = this.props;
    this.setState({ req: "loading" });
    Nprogress.start();
    if (typeof promise === "object") {
      promise
        .then(() => {
          this.setState({ req: "resolve" });
          Nprogress.done();
        })
        .catch(() => {
          this.setState({ req: "error" });
          Nprogress.done();
        });
    }
  }

  render() {
    const { resolve, loading, error } = this.props;
    if (this.state.req === "loading") return loading || <div />;
    if (this.state.req === "error") return error || <div />;
    return resolve || <div />;
  }
}

export default AsyncWrapper;
