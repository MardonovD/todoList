import React from "react";
export const Action = (value) => {
  return {
    type: "ADD",
    payload: value,
  };
};
