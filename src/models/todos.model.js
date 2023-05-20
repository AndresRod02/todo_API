const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Todos = db.define(
    'todos', {
        title:{
            type: DataTypes.STRING(70),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        categoryId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id'
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        }
    }
)
module.exports = Todos;