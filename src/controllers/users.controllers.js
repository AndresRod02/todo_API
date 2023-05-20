const Users = require('../models/users.model')
const Todos = require('../models/todos.model')
const Categories = require('../models/categories.model')
const createUser = async (req, res)=>{
    try{
        const newUser = req.body
        await Users.create(newUser);
        res.status(201).send();
    }
    catch (error) {
        res.status(400).json(error)
    }
}
const getTodosByUser = async (req, res)=>{
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
}
module.exports = {
    createUser,
    getTodosByUser
}