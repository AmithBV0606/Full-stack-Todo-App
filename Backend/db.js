const mongoose = require("mongoose");

mongoose.connect(``)
.then(() => console.log(`Connection to DB successful`))

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false,
        required:false
    }
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = {
    Todo
};