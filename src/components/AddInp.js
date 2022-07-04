import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Action } from "../redux/valueAction";

const AddInp = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const saveFunction = () => {
    dispatch(Action(state));
  };

  return (
    <Inp>
      <Add>
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          type="text"
          placeholder="add"
        />
        <Btn
          onClick={() => {
            saveFunction();
          }}
        >
          Add
        </Btn>
      </Add>
    </Inp>
  );
};
const Inp = styled.div`
  display: flex;
  justify-content: center;
`;

const Add = styled.div`
  display: flex;
  gap: 30px;

  input {
    padding-left: 15px;
  }
`;

const Btn = styled.button`
  background-color: crimson;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  &:hover {
    transform: scale(0.98);
  }
`;

export default AddInp;
