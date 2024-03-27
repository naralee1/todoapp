import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, revomeItem, toggleCompleted, editCompleteItem}) {
  return (
    <div>
      <ul className='todo_list'>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} revomeItem={revomeItem} toggleCompleted={toggleCompleted} editCompleteItem={editCompleteItem} />
        )}
      </ul>
    </div>
  )
}

export default TodoList

