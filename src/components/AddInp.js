import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { textObj } from "../redux/Actions/text-action";

const AddInp = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    dispatch(textObj(state));
  }, [state]);

  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const saveFunction = () => {};
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
