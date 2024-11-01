import React from 'react'

const ToDoCard = (props) => {
    const {children, handleRemoveTodo, index} = props
  return (
    <li className='todoItem'>
        {children}
        <div className="actionsContainer">
          <button>
              <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            handleRemoveTodo(index)
          }}>
              <i className="fa-solid fa-trash"></i>
          </button>
        </div>
    </li>
  )
}

export default ToDoCard