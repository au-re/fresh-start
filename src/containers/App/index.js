import { Card } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getResources, getStatus } from "redux-resource";

import Button from "../../components/Button";
import { fetchTodoById, fetchTodos } from "../../redux/resources";
import styled from "./App.style";
import reducer from "./reducer";

const mapStateToProps = (state) => ({
  todos: getResources(state.todos, () => true),
  status: getStatus(state, "todos.requests.fetchTodos.status")
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTodos, fetchTodoById }, dispatch);

class App extends Component {

  async componentDidMount() {
    const { fetchTodoById = () => { } } = this.props;
    await fetchTodoById(1);
  }

  render() {
    const { status = {}, className, todos = [], fetchTodos = () => { } } = this.props;
    return (
      <div className={className}>
        {status.pending && <p>loading</p>}
        {!status.pending && status.failed && <p>error</p>}
        <Button primary onClick={() => fetchTodos()}>fetch todos</Button>
        {
          !status.failed && todos.map((todo) =>
            (<Card bordered={false} title={todo.title} extra={<a href="#">More</a>}></Card>))
        }
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(styled(App));
export { reducer, App };
