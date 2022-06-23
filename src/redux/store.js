import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import post from "./modules/post"
import user from "./modules/user";
import comment from "./modules/comment";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router"

export const history = createBrowserHistory();
const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({
    post,
    user,
    comment,
    router: connectRouter(history),
})

const store = createStore(rootReducer, enhancer);

export default store;