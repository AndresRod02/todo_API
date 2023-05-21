const express = require('express');
require("dotenv").config();
const db = require('./utils/database');
const initModels = require('./models/initModels');
initModels();
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const categoriesRoutes = require('./routes/categories.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7000;

db.sync()
.then(()=>{
    console.log('Base de datos sincronizada')
})
.catch( error => {
    console.error(error)
});

app.use(userRoutes);

app.use(todosRoutes);

app.use(categoriesRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchado en el puerto ${PORT}`)
});