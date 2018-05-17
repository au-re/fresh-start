import { actionTypes, getStatus } from "redux-resource";
import { reset } from "redux-resource-plugins";
import request from "superagent";

export const resetTodos = () => reset.resetResource("todos");

export const fetchTodos = () => async (dispatch, getState) => {
  const status = getStatus(getState(), "todos.requests.fetchTodos.status");
  if (status.succeeded || status.pending) return;
  try {
    dispatch({
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceType: "todos",
      request: "fetchTodos",
    });
    const { body } = await request
      .get("https://jsonplaceholder.typicode.com/todos")
      .accept("application/json");
    dispatch({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: "todos",
      request: "fetchTodos",
      resources: body,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: "todos",
      request: "fetchTodos",
      statusCode: error.response.status,
    });
  }
};

export const fetchTodoById = (id) => async (dispatch, getState) => {
  const status = getStatus(getState(), `todos.meta.${id}.readStatus`);
  if (status.succeeded || status.pending) return;
  try {
    dispatch({
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceType: "todos",
      resources: [id],
    });
    const { body } = await request
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .accept("application/json");
    dispatch({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: "todos",
      resources: [body],
    });
  } catch (error) {
    dispatch({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: "todos",
      resources: [id],
      statusCode: error.response.status,
    });
  }
};
