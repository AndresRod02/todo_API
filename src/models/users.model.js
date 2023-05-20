const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Users = db.define(
    'users', 
    {
        username: {
            type: DataTypes.STRING(60),
            unique: true,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(80),
            unique: true,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    module.exports = Users;