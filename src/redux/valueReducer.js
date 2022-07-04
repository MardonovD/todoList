import { Action } from "./valueAction";

export const Reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
