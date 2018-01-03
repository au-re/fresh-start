import _ from "lodash";
import { actionTypes, getStatus, requestStatuses } from "redux-resource";
import request from "superagent";

// thunk
export const fetchTodos = () => async (dispatch, getState) => {
  const status = getStatus(getState(), "todos.requests.fetchTodos.status");
  if (status.succeeded || status.pending) return;
  try {
    dispatch({
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceName: "todos",
      request: "fetchTodos"
    });
    const { body } = await request
      .get("https://jsonplaceholder.typicode.com/todos")
      .accept("application/json");
    dispatch({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceName: "todos",
      request: "fetchTodos",
      resources: body
    });
  } catch (error) {
    dispatch({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceName: "todos",
      request: "fetchTodos",
      error
    });
  }
};

export const fetchTodoById = (id) => async (dispatch, getState) => {
  const status = _.get(getState(), `todos.meta.${id}.readStatus`);
  if (status === requestStatuses.PENDING || status === requestStatuses.SUCCEEDED) return;
  try {
    dispatch({
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceName: "todos",
      request: "fetchTodosById"
    });
    const { body } = await request
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .accept("application/json");
    dispatch({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceName: "todos",
      request: "fetchTodosById",
      resources: [body]
    });
  } catch (err) {
    dispatch({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceName: "todos",
      request: "fetchTodosById"
    });
  }
};
