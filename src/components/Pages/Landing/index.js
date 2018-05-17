import React, { Component } from "react";

import Button from "../../Button";

class Landing extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        landing page
        <Button>hello world</Button>
      </div>);
  }
}

export default Landing;
