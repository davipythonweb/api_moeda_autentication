const express = require('express');

const authRoutes = require('./authRoutes');
const cotacaoRoutes = require('./cotacaoRoutes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: 'online',
        projeto: 'API Cotação JWT'
    });
});

router.use('/auth', authRoutes);
router.use('/cotacao', cotacaoRoutes);

module.exports = router;