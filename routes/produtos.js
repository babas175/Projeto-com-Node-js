const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o get'
    });
});


router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'Usando o metodo Post'

    });
});


router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'Usando o metodo delete'

    });
});


router.put('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'Usando o metodo put '

    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'Usando o metodo patch '

    });
});



module.exports = router;