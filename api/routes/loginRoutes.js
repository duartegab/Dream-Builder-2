const controllerLogin = require("../../api/controllers/loginControllers");

const express = require('express');
 
const router = express.Router();
 
 
//rota do projeto
 
router.get('/', controllerLogin.login);
router.post('/validar', controllerLogin.validarPSW);
 
module.exports = router