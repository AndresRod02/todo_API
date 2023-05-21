const Todos = require('../models/todos.model')

const createToDo = async (req, res)=>{
    try{
        const newTodo = req.body
        await Todos.create(newTodo);
        res.status(201).send();
    }
    catch (error){
        res.status(400).json(error)
    }
}

const updateToDo = async (req, res)=>{
    try{
        const {id} = req.params;
        const {completed} = req.body
        await Todos.update({completed}, {
            where: {id}
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json(error)
    }
}
const deleteToDo = async(req, res)=>{
    try{
        const {id}= req.params
        await Todos.destroy({
            where: {id}
        })
        res.status(204).send()
    }
    catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    createToDo,
    updateToDo,
    deleteToDo
}