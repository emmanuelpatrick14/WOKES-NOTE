import express from "express";

import {createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo} from '../Controllers/todoController.js'

const router = express.Router();


router.get('/todos', getAllTodos);
router.get('/todos/:id', getTodoById);
router.post('/todos', createTodo);

router.put('/todos/:id',updateTodo);

router.delete('/todos/:id', deleteTodo);




export default router;