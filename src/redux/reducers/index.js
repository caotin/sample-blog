import { combineReducers } from "redux";
import user from "./user";

const mainReducer = asyncReducers => combineReducers({ user, ...asyncReducers });
export default mainReducer;
