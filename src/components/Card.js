import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <div>
        <div>value</div>
        <div className="icon">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <div className="censel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-backspace"
              viewBox="0 0 16 16"
            >
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
            </svg>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    .icon {
      display: flex;
      gap: 15px;
      & > div {
        color: crimson;
        &:hover {
          transform: scale(0.88);
          transition: all ease-in-out 0.5s;
        }
      }
      .censel {
        color: green;
        &:hover {
          transform: scale(0.88);
          transition: all ease-in-out 0.5s;
        }
      }
    }
  }
`;

export default Card;
