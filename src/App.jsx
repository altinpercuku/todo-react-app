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
  return (
    <>
        <ToDoInput handleAddTodos={handleAddTodos}/>
        <TodoList todo={todos}/>
    </>
  )
}

export default App
