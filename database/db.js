
const Sequelize = require('sequelize');

const sequelize = new Sequelize("sistema12", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(function(){
        console.log("conexao com banco de dados realizada com sucesso! ");
    }).catch(function(){
        console.log("Error: conexao com banco de dados nao foi realizados verifique o codigo");
    });




module.exports=sequelize;