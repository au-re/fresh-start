import { setTimeout } from "timers";

import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getResources, getStatus } from "redux-resource";

import AsyncWrapper from "../../components/AsyncWrapper";
import Button from "../../components/Button";
import { fetchTodoById, fetchTodos } from "../../redux/ressources";
import styled from "./App.style";
import reducer from "./reducer";

const { Sider } = Layout;

const mapStateToProps = (state) => ({
  todos: getResources(state.todos, () => true),
  status: getStatus(state, "todos.requests.fetchTodos.status")
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTodos, fetchTodoById }, dispatch);

let id = 1;

class App extends Component {

  componentDidMount() {
    const { fetchTodos, fetchTodoById } = this.props;
    fetchTodoById(1);
    fetchTodos();
  }

  render() {
    const { className, fetchTodos, fetchTodoById } = this.props;
    return (
      <div className={className}>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={false}
          width="240"
          className="App__Sidebar" />
        <Button primary onClick={() => fetchTodos()}>fetch todos</Button>
        <Button primary onClick={() => fetchTodoById(id++)}>fetch todo by id</Button>
        <AsyncWrapper
          promise={new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))}
          resolve={<Button>async</Button>}
          loading={<Button disabled>loading...</Button>}
          error={<Button disabled>error</Button>} />
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(styled(App));
export { reducer };
