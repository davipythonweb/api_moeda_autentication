# api_moeda_autentication
API de Contação de moeda com autentitação em jwt .

# inicializar projeto Node
- npm init -y
# instalar dependencias
npm install express axios jsonwebtoken bcryptjs dotenv cors
npm install -D nodemon

# subir server
npm run dev

# configurar scripts
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}