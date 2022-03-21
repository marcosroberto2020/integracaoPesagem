const express = require('express');
const app = express();
const Pesagem = require('./models/pesagemimp');
var porta = process.env.PORT || 8080;



app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial - Celke");
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await Pesagem.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Pesagem cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Pesagem não cadastrada com sucesso!"
        });
    });

    //res.send("Página cadastrar");
});


app.listen(porta, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});