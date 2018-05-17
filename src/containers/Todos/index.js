import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getResources, getStatus } from "redux-resource";

import Todos from "../../components/Pages/Todos";
import { fetchTodoById } from "../../redux/resources";

const mapStateToProps = (state) => ({
  todos: getResources(state.todos, () => true),
  status: getStatus(state, "todos.requests.fetchTodos.status"),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchTodoById }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
