import { createStore } from "redux";
import { textReducer } from "./Reducers/text-Reducer";

export const store = createStore(
  textReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
