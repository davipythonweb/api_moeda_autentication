# api_moeda_autentication
API de Contação de moeda com autentitação em jwt .

# inicializar projeto Node
- npm init -y
# instalar dependencias
npm install express axios jsonwebtoken bcryptjs dotenv cors
npm install -D nodemon

# subir server
npm run dev
ou bun run dev

# configurar scripts
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}

- instalando o bun
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
bun --version
which bun
dentro da pasta: bun install



<!-- 

TESTE COMPLETO DA API
📌 1. Registrar usuário
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"nome":"Joao","email":"joao@gmail.com","senha":"123456"}'

✅ Resposta esperada:
{
  "mensagem": "Usuário cadastrado com sucesso",
  "id": 1
}

📌 2. Fazer login (pegar token)
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"joao@gmail.com","senha":"123456"}'

✅ Resposta esperada:
{
  "mensagem": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

👉 COPIE ESSE TOKEN

📌 3. Consultar cotação (ROTA PROTEGIDA)

Exemplo USD-BRL:

curl http://localhost:3000/cotacao/USD-BRL \
-H "Authorization: Bearer SEU_TOKEN_AQUI"

✅ Resposta esperada:
{
  "moeda": "USD-BRL",
  "dados": {
    "USDBRL": {
      "code": "USD",
      "codein": "BRL",
      "bid": "5.42",
      "ask": "5.43"
    }
  }
}


 -->