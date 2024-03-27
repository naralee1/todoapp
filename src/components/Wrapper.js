import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

function Wrapper() {
  const [todos, setTodos] = useState([])

  const addItem = newTodo => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: newTodo,
        completed: false
      }
    ])
  }
  const revomeItem = id => setTodos(todos.filter(todo => todo.id !== id))

  const toggleCompleted = id => {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed
    })
      //map(() => {return {a:1, b:2}})
      //map(() => ({a: 1, b: 2}))

      // todo.id === id ? {...todo, completed :!todo.completed} : todo

    ))
  }
  const editCompleteItem = (id, editTask) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, task: editTask} : todo))
  }

  return (
    <div className='wrapper'>
      <TodoHeader />
      <TodoAdd addItem={addItem} />
      <TodoList todos={todos} revomeItem={revomeItem} toggleCompleted={toggleCompleted} editCompleteItem={editCompleteItem} />
    </div>
  )
}

export default Wrapper