const express = require('express');
const app = express();

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
