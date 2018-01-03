import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import reducers from "./reducers";
import thunk from "redux-thunk";

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
