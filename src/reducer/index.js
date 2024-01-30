import { combineReducers } from "redux";
import crud from "./api";

const root = combineReducers({
    Api:crud
})
export default root;