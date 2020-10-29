import React, { useState } from 'react'
import "./App.css";
import Input from '../Input'
import List from '../List'
import Button from '../Button'

function App() {
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addTodoListItem(event) {
    if (inputValue !== ''){
      setTodoList([...todoList, inputValue])
      event.target.parentNode.childNodes[1].value = ''
      setInputValue('')
    }
  }

  function captureInputValue(event) {
    setInputValue(event.target.value)
    if (event.key === 'Enter' && event.target.value !== '') {
        setTodoList([...todoList, event.target.value])
        event.target.value = ''
    }
  }

  function deleteListItem(index) {
    setTodoList([
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1)
    ])
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input handleChange={captureInputValue} />
      <Button id={'addTodo'} handleClick={addTodoListItem} />
      <List handleClick={deleteListItem} listData={todoList} />
    </div>
  )
}

export default App;
