import { createStore } from "redux";
import { Reducer } from "./valueReducer";
const state = [];
const store = createStore(
  Reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
