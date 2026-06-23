const db = require('../config/database');

const registrarLog = (usuarioId, acao, detalhe = null) => {

    db.run(
        `INSERT INTO logs (usuario_id, acao, detalhe) VALUES (?, ?, ?)`,
        [usuarioId, acao, detalhe]
    );
};

module.exports = {
    registrarLog
};