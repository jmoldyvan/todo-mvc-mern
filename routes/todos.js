// const express = require('express')
import express  from "express"
const router = express.Router()
// const todosController = require('../controllers/todos') 
import todosController  from "../controllers/todos.js"
// const { ensureAuth } = require('../middleware/auth')
import  ensureAuth   from "../middleware/auth.js"

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)
console.log(router);
export default router