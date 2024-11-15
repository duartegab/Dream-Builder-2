const gerenciadorControllers = require("../controllers/gerenciadorControllers")

const express = require('express');

const router = express.Router();

router.get("/", gerenciadorControllers.getAll);

module.exports = router;