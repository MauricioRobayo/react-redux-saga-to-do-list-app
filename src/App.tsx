import React from "react";
import { createGlobalStyle } from 'styled-components/macro'

import TodoList from "./todos/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eeeeee;
    font-family: sans-serif;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  )
}

export default App;
