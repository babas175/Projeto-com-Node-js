
const express = require('express'); 
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const rotaProdutos = require('./routes/routes');
const User = require("./models/cadastro");
const User1 = require("./models/agendamento");
const User3 = require("./models/cadastro_adm");
const db = require("./database/db");

app.use(bodyParser.json());
app.use('/routes', rotaProdutos);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));


app.use((error, req, next)=> {
    const erro = new Error('Nao encontrado');
    erro.status = 404;
    next(erro);
});



app.use((error, req, next)=> {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});


module.exports = app;