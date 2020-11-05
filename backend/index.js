const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//Utilisation des middlewares
app.use(cors());
app.use(express.json());

//Définition des routes

//Create todo
app.post("/todos", async (req, res) => {
    try{
        const { description, date } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description, date) VALUES($1, $2) RETURNING *", 
        [description, date]);

        res.json(newTodo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});


//get all todo
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch(err){
        console.error(err.message);
    }
});

//get todo by id
app.get("/todos/:id", async(req, res) => {
   try {
        const {id} = req.params;
        const oneTodo = await pool.query("SELECT * FROM todo WHERE(todo_id = $1)", [id]);
        res.json(oneTodo.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//Put todo
app.put("/todos/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE(todo_id = $2)",
        [description, id]);
        res.json("Todo list is update with seccess !");
    }
    catch(err){
        console.error(err.message);
    }
});

//Delete todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE(todo_id = $1)", [id]);
        res.json("Todo is deleted with success !");
    } catch (err) {
        console.error(err.message);
    }
})

const port = 5000;
app.listen(port, () => {
    console.log("My application running on port 5000");
});