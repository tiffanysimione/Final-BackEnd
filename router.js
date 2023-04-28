const express =require ('express');
const isLoggedIn = require('./src/middleware/isLoggedIn');


const createTodoRoute = require('./src/routes/createTodoRoute');
const readTodosRoute = require('./src/routes/readTodosRoute');
const updateTodoRoute = require('./src/routes/updateTodoRoute');
const deleteTodoRoute = require('./src/routes/deleteTodoRoute');



const router =express.Router();

router.post('/login', require('./src/routes/loginRoute'));



router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos', isLoggedIn, readTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);


module.exports =router;