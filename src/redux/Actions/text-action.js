import React from "react";

export const ADD = "ADD";

export const textObj = (store) => {
  return {
    type: ADD,
    payload: store,
  };
};
