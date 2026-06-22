// Servidor para a API de cotação com JWT
const express = require("express");

// Criando o servidor Express
const app = express();

// o que eh middleware? O middleware é uma função que tem acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta do aplicativo. Ele pode executar código, fazer alterações nos objetos de solicitação e resposta, encerrar o ciclo de solicitação-resposta ou chamar a próxima função de middleware.
// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo para obter a cotação
app.listen(3000, () => {
    // Aqui você pode adicionar a lógica para lidar com as rotas da API de cotação
    console.log("Servidor rodando");
});

