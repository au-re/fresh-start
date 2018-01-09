import { resourceReducer } from "redux-resource";
import { httpStatusCodes, reset } from "redux-resource-plugins";

import { reducer as app } from "../containers/App";

export default {
  app,
  todos: resourceReducer("todos", { plugins: [httpStatusCodes, reset] })
};
