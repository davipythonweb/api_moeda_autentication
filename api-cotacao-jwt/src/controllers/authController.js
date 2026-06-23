const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../config/database');
const logService = require('../services/logService');

// REGISTER
const register = async (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Campos obrigatórios' });
    }

    db.get(
        `SELECT * FROM usuarios WHERE email = ?`,
        [email],
        async (err, user) => {

            if (user) {
                return res.status(400).json({ erro: 'Email já cadastrado' });
            }

            const senhaHash = await bcrypt.hash(senha, 10);

            db.run(
                `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`,
                [nome, email, senhaHash],
                function (err) {

                    if (err) {
                        return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
                    }

                    // LOG REGISTER
                    logService.registrarLog(
                        this.lastID,
                        'REGISTER',
                        'Usuário criado'
                    );

                    return res.status(201).json({
                        mensagem: 'Usuário cadastrado com sucesso',
                        id: this.lastID
                    });
                }
            );
        }
    );
};

// LOGIN
const login = (req, res) => {

    const { email, senha } = req.body;

    db.get(
        `SELECT * FROM usuarios WHERE email = ?`,
        [email],
        async (err, user) => {

            if (!user) {
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }

            const senhaValida = await bcrypt.compare(senha, user.senha);

            if (!senhaValida) {
                return res.status(401).json({ erro: 'Senha inválida' });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    nome: user.nome
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            // LOG LOGIN
            logService.registrarLog(
                user.id,
                'LOGIN',
                'Usuário realizou login'
            );

            return res.json({
                mensagem: 'Login realizado com sucesso',
                token
            });
        }
    );
};

module.exports = {
    register,
    login
};