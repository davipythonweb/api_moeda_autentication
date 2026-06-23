const axios = require('axios');
const logService = require('../services/logService');

const getCotacao = async (req, res) => {

    const { moeda } = req.params;

    const usuarioId = req.usuario.id;

    try {

        const response = await axios.get(
            `https://economia.awesomeapi.com.br/json/last/${moeda}`
        );

        // LOG COTAÇÃO
        logService.registrarLog(
            usuarioId,
            'COTACAO',
            `Consulta moeda: ${moeda}`
        );

        return res.json({
            moeda,
            dados: response.data
        });

    } catch (error) {
        return res.status(500).json({
            erro: 'Erro ao buscar cotação'
        });
    }
};

module.exports = {
    getCotacao
};