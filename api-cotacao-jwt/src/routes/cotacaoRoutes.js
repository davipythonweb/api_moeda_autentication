const express = require('express');

const cotacaoController = require('../controllers/cotacaoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:moeda', authMiddleware, cotacaoController.getCotacao);

module.exports = router;