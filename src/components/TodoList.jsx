import React from 'react'
import ToDoCard from './ToDoCard'

const TodoList = (props) => {
    const {todo} = props
  return (
    <div>
        <ul className='main'>
        {todo.map((item, itemIndex) =>{
                return(
                    <ToDoCard {...props} key={itemIndex} index={itemIndex}>
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