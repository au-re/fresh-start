import { resourceReducer } from "redux-resource";
import { httpStatusCodes, reset } from "redux-resource-plugins";

export default {
  todos: resourceReducer("todos", { plugins: [httpStatusCodes, reset] }),
};
