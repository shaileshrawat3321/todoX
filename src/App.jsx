import React, { useState } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Demo Title',
      description: 'Demo Description'
    },
  ])
  const [id, setId] = useState('')

  const deleteTodo = (id) => {
    setTodos(todos.filter((eachTodo) => eachTodo.id !== id))
  }

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">TodoX - A Todo App</h1>
        <InputForm
          setTodos={setTodos}
          todos={todos}
          id={id}
          setId={setId} />

        <TodoList todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  )
}

export default App
