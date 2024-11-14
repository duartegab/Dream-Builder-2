const express = require('express');
const router = express.Router();
const evolucaoControllers = require('../../api/controllers/evolucaoControllers');

router.get('/', evolucaoControllers.exibirFormulario);
router.post('/salvar', evolucaoControllers.salvarEvolucao);

module.exports = router;
