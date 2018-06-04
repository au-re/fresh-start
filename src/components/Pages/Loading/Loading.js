import { Button, Spin, message } from "antd";
import React, { Component } from "react";

/**
 * Component that renders while a page loads
 *
 * @class LoadingPage
 * @extends {Component}
 */
class LoadingPage extends Component {
  render() {
    const { className, error, pastDelay, retry } = this.props;

    if (error) {
      message.error("something went wrong");
      return <div>Error! <Button onClick={retry}>Retry</Button></div>;
    }

    if (pastDelay) {
      return <div className={className}>
        <Spin size="large" />
      </div>;
    }

    return null;
  }
}

export default LoadingPage;
