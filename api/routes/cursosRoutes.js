const controllersCursos = require("../../api/controllers/cursosControllers")

const express = require('express');

const router = express.Router();

router.get("/", controllersCursos.getAll);
router.get("/:id", controllersCursos.getById);

module.exports = router;