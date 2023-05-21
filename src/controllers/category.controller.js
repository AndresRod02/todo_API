const Categories = require('../models/categories.model')


const createCategory = async (req, res)=>{
    try{
        const newCategory = req.body
        await Categories.create(newCategory)
        res.status(201).send()
    }
    catch (error) {
        res.status(400).json(error)
    }
}

module.exports ={
    createCategory
}