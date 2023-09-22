const express = require('express');
const ControllerAvaliacao = require('../controllers/avaliacao');

const controller = new ControllerAvaliacao();
const router = express.Router();

router.post('/api/adicao', controller.Adicao);
router.post('/api/subtracao', controller.Subtracao);
router.post('/api/multiplicacao', controller.Multiplicacao);
router.post('/api/divisao', controller.Divisao);
router.post('/api/exponenciacao', controller.Exponenciacao);
router.post('/api/radiciacao', controller.Radiciacao);

module.exports = router;
