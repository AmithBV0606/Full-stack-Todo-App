import React, { useState } from "react";
import "./Todo.css";

function Todos({ todo }) {
  const [completed, setCompleted] = useState(false);

  const handlePut = async () => {
    await fetch(`http://localhost:8000/completed`, {
      method:"PUT",
      body: JSON.stringify({
          id: todo._id,
      }),
      headers: {
          "content-type": "application/json"
      }
  });
  }

  return (
    <div className="card">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={handlePut} style={{cursor:"pointer"}}>{todo.completed === true ? "Completed" : "Mark as done"}</button>
    </div>
  );
}

export default Todos;