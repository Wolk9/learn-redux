import counterReducer from "./counterj";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;
