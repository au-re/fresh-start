import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
export { history };
