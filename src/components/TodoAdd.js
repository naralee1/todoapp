import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TodoAdd({addItem}) {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault()
    addItem(inputValue)
    setInputValue('')
  }

  return (
    <form className="todo_add" onSubmit={handleAddItem}>
      <input type="text" value={inputValue} placeholder="할일을 입력하세요." onChange={e => setInputValue(e.target.value)} />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export default TodoAdd;
