const express = require("express");
const app = express();
const PORT = 8000;

// Cors
const cors = require("cors");

// Zod
const { createTodo, updateTodo} = require("./types");

// MongoDB
const { Todo } = require("./db");

app.use(express.json()); // Parses body if it's in Json format

app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return
    }

    // parsePayload.success === true => put it in MongoDB
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false    
    });

    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", async (req, res) => {
    const allTodos = await Todo.find({});

    res.json({
        allTodos
    })
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return
    }

    await Todo.updateOne({
        _id: req.body.id
    },{
        completed:true
    });

    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));