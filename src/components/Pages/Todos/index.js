import { message } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Todos extends Component {

  async componentDidMount() {
    const { fetchTodoById } = this.props;
    try {
      await fetchTodoById(1);
    } catch (error) {
      message.error("something went wrong");
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        todos
      </div>);
  }
}

Todos.propTypes = {
  fetchTodoById: PropTypes.func,
};

Todos.defaultProps = {
  fetchTodoById: () => { },
};

export default Todos;
