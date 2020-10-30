import React, { useState } from 'react'

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <label htmlFor='new-todo'>New Todo:</label>
      <input id='new-todo' type='text' placeholder='New Todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <button type="button">Create todo</button>
    </>
  )
}

export default NewTodoForm