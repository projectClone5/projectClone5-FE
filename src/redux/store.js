import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";



export const history = createBrowserHistory();
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore( enhancer);

export default store;