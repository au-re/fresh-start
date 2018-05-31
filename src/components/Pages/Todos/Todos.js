import { message } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getResources, getStatus } from "redux-resource";
import styled from "styled-components";

import { fetchTodos } from "../../../redux/resources/todos";
import Card from "../../Card/Card";
import CardList from "../../CardList/CardList";

class Todos extends Component {

  static defaultProps = {
    fetchTodos: () => { },
    todos: [],
  };

  static propTypes = {
    todos: PropTypes.array,
    fetchTodos: PropTypes.func,
  };

  async componentDidMount() {
    const { fetchTodos } = this.props;
    try {
      await fetchTodos();
    } catch (error) {
      message.error("something went wrong");
    }
  }

  render() {
    const { className, todos } = this.props;
    return (
      <div className={className}>
        <CardList>
          {
            todos.map((todo, idx) =>
              <Card key={idx} delay={idx} title={todo.title}>hello world</Card>)
          }
        </CardList>
      </div>);
  }
}

const styledTodos = styled(Todos) `
  min-height: 100%;
  background: #ffad36;
`;

const mapStateToProps = (state) => ({
  todos: getResources(state.todos, () => true),
  status: getStatus(state, "todos.requests.fetchTodos.status"),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTodos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(styledTodos);
