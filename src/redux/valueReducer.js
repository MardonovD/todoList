import { Action } from "./valueAction";

export const Reducer = (state , { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, payload];
    default:
      return state;
  }
};
