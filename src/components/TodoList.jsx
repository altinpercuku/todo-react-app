import React from 'react'
import ToDoCard from './ToDoCard'

const TodoList = () => {
    let todo = [
        "Go to the gym",
        "Eat more fruits",
        "Learn React.js",
    ]
  return (
    <div>
        <ul className='main'>
        {todo.map((item, itemIndex) =>{
                return(
                    <ToDoCard key={itemIndex}>
                        <p>
                            {item}
                        </p>
                    </ToDoCard>
                )
        } 
        )}
        </ul>
    </div>
  )
}

export default TodoList