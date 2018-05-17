import { Spin, message } from "antd";
import React, { Component } from "react";

/**
 * Component that renders while a page loads
 *
 * @class PageLoader
 * @extends {Component}
 */
class PageLoader extends Component {
  render() {
    const { className, error, pastDelay } = this.props;
    if (error) {
      message.error("something went wrong");
      return null;
    }
    if (pastDelay) {
      return <div className={className}>
        <Spin size="large" />
      </div>;
    }
    return null;
  }
}

export default PageLoader;
