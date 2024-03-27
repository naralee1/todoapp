import React, {useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({todo, revomeItem, toggleCompleted, editCompleteItem}) {
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState('');

  const editItem = () => { //편집 모드되기 전
    setIsEditing(true)
    setEditText(todo.task)
    // editRef.current.focus()
  };
  useEffect(() => {
  if(isEditing){
    editRef.current.focus()
  }
  }, [isEditing])
  const editCompleted = () => {
    setIsEditing(false);
    editCompleteItem(todo.id, editText)
  }
  return (
    <li>
      {isEditing ?
        <>
          <input ref={editRef} type='text' value={editText} onChange={e => setEditText(e.target.value)} />
          <button onClick={editCompleted}>save</button>
        </>
        :
        <>
          <span
          className={todo.completed ? 'completed' : ''}
          onClick={() => toggleCompleted(todo.id)}
          >
            {todo.task}
          </span>
          <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={editItem} />
          <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => revomeItem(todo.id)} />
        </>
      }
    </li>
  )
}

export default TodoItem