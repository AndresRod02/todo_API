const {Router} = require('express');
const {createCategory} = require('../controllers/category.controller')
const router = Router();


router.post('/categories', createCategory)



module.exports = router;
