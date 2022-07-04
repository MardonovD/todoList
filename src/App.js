import React from "react";
import "./index.css";
import AddInp from "./components/AddInp";
import styled from "styled-components";
import Card from "./components/Card";
function App() {
  return (
    <Container>
      <AddInp />
      <Card />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 80%;
  height: 80vh;
  /* background-color: red */
`;

export default App;
