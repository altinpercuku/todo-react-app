import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  const handleRemoveTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }
  const handleEditTodo = (index) => {

  }
  return (
    <>
        <ToDoInput handleAddTodos={handleAddTodos}/>
        <TodoList handleRemoveTodo={handleRemoveTodo} todo={todos} />
    </>
  )
}

export default App
