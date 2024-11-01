import React, { useState } from 'react'

const ToDoInput = (props) => {
    const {handleAddTodos} = props
    const [todoValue, setTodoValue] = useState('')
    return (
    <header>
        <input type="text" id='thisinput' placeholder='Enter todo...' onChange={(e) =>{
            setTodoValue(e.target.value)
        }} />
        <button onClick={()=>{
            handleAddTodos(todoValue);
            document.getElementById('thisinput').value = ''
        }}>Add</button>
    </header>
  )
}

export default ToDoInput