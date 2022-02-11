const express = require('express'); 
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const rotaProdutos = require('./routes/produtos');


app.use('/produtos', rotaProdutos);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


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