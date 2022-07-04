import { ADD } from "../Actions/text-action";

export const textReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    default:
      return state;
  }
};
