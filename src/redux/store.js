import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import post from "./modules/post"
import user from "./modules/user";
import comment from "./modules/comment";
import { createBrowserHistory } from "history";

const rootReducer = combineReducers({
    post,
    user,
    comment,
})

export const history = createBrowserHistory();
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;