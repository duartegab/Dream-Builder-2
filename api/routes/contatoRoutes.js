const express = require('express');
const router = express.Router();
const contatoControllers = require('../../api/controllers/contatoControllers');

router.get('/', contatoControllers.exibirFormulario);
router.post('/salvar', contatoControllers.salvarFormulario);

module.exports = router;
