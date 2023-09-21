const express = require('express');
const ControllerAvaliacao = require('../controllers/avaliacao');

const controller = new ControllerAvaliacao();
const router = express.Router();

// router.post('/api/exercicio1', controller.Somar);

module.exports = router;
