import React, { useState } from 'react'

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleFetch = async () => {
        const res = await fetch(`http://localhost:8000/todo`, {
            method:"POST",
            body: JSON.stringify({
                title,
                description
            }),
            headers: {
                "content-type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data);

        if (data.msg) {
            setTitle("");
            setDescription("");
        }
    }

  return (
    <div>
        <label>Title : </label><br />
        <input 
            type="text" 
            placeholder='title' 
            onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <label>Description : </label><br />
        <textarea 
            type="" 
            placeholder='description'
            onChange={(e) => setDescription(e.target.value)} 
        /><br /><br />

        <button onClick={handleFetch}>Add</button><br />
    </div>
  )
}

export default CreateTodo;