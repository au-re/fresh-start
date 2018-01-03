import { resourceReducer } from "redux-resource";

import { reducer as app } from "../containers/App";

export default {
  app,
  todos: resourceReducer("todos")
};
