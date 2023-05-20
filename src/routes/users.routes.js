const { Router } = require("express");
const { createUser, getTodosByUser } = require("../controllers/users.controllers");

const router = Router();

router.post("/users", createUser);

router.get("/users/:id", getTodosByUser);

module.exports = router;
