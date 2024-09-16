import { useState, useEffect } from 'react'
import "./App.css";
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const response = await fetch(`http://localhost:8000/todos`);
    const data = await response.json();
    setTodos(data.allTodos);
  }

  useEffect(() => {
    setInterval(() => {
      fetchTodos();
    }, 2000);
  },[]);
  
  return (
    <div className='container'>
      <CreateTodo />

      <h2>Todos : </h2>
      
      <div className='innerContainer'>
        {todos.map((todo) => (
          <Todos todo={todo} key={todo._id}/>
        ))}
      </div>
    </div>
  )
}

export default App