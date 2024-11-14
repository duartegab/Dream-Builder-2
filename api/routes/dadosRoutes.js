const controllersDados = require("../../api/controllers/dadosControllers")

const express = require('express');

const router = express.Router();


router.post("/", controllersDados.edicoesListar);
router.post("/ads", controllersDados.adsListar);
router.post("/dsm", controllersDados.dsmListar);
router.post("/ge", controllersDados.geListar);
router.post("/gpi", controllersDados.gpiListar);
router.post("/grh", controllersDados.grhListar);


module.exports = router;