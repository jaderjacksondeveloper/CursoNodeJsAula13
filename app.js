// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Testar conexão com banco de dados
const db = require("./db/models");

// Incluir as CONTROLLERS
const home = require("./controllers/home");
const contactMenssage = require("./controllers/contactMessage");

// Criar as rotas
app.use('/home', home);
app.use('/contact-menssage', contactMenssage);

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});