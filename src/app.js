const express = require('express');
require("dotenv").config();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const Todos = require('./models/todos.model');
const Users = require('./models/users.model');
const Categories = require('./models/categories.model');
initModels();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7000;

db.sync()
    .then(()=>{
        console.log('Base de datos sincronizada')
    })
    .catch( error => {
        console.error(error)
    })

app.post('/todos', async (req, res)=>{
    try{
        const newTodo = req.body
        await Todos.create(newTodo);
        res.status(201).send();
    }
    catch (error){
        res.status(400).json(error)
    }
})
app.post('/users', async (req, res)=>{
    try{
        const newUser = req.body
        await Users.create(req.body);
        res.status(201).send();
    }
    catch (error) {
        res.status(400).json(error)
    }
})
app.get('/users/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const todos = await Users.findByPk(id, {
            attributes: ['id', 'username'],
            include:{
                model: Todos,
                attributes: {
                    exclude: ['updatedAt', 'categoryId', 'userId']
                },
                include: {
                    model: Categories,
                    attributes: ['name']
                }
            }
        });
        res.json(todos);
    }
    catch (error) {
        res.status(400).json(error)
    }
})
app.put('/todos/:id', async (req, res)=>{
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
})
app.delete('/todos/:id', async(req, res)=>{
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
})
app.listen(PORT, ()=>{
    console.log(`Servidor escuchado en el puerto ${PORT}`)
})