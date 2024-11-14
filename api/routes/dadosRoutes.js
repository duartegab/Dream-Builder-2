const controllersDados = require("../../api/controllers/dadosControllers")

const express = require('express');

const router = express.Router();

router.get("/", controllersDados.getAll);
router.get("/:id", controllersDados.getById);

router.post("/edicoes", controllersDados.edicoesListar);

module.exports = router;