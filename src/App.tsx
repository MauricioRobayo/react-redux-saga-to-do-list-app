import React from 'react';
import TodoList from './todos/TodoList';
import './App.css';

function App() {
  return (
    <TodoList todos={[{ text: 'Todo1' }, { text: 'Todo2' }]} />
  );
}

export default App;
