const {Router} = require('express');
const {createToDo, updateToDo, deleteToDo} = require('../controllers/todos.controllers')
const router = Router()

router.post('/todos', createToDo)

router.put('/todos/:id', updateToDo)

router.delete('/todos/:id', deleteToDo)


module.exports = router;