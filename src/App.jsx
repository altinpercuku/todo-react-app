import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

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
    const valueToBeEdited = todos[index]
    document.getElementById("thisinput").value = valueToBeEdited
    handleRemoveTodo(index)
  }
  return (
    <>
        <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <TodoList handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} todo={todos} />
    </>
  )
}

export default App
