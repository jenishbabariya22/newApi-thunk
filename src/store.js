import { applyMiddleware, createStore } from "redux";
import root from "./reducer";
import { thunk } from "redux-thunk";
const store = createStore(root,applyMiddleware(thunk))

export default store;