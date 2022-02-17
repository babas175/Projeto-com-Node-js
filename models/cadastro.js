const Sequelize = require('sequelize');

const db = require('../database/db');


const User = db.define('cadastro',{
    cpf:{
        type: Sequelize.INTEGER,
        allownull: false,
    },

    email:{
        type: Sequelize.STRING,
        allownull: false,
    },

    bloco:{
        type: Sequelize.STRING,
        allownull: false,
    },

    apartamento:{
        type: Sequelize.STRING,
        allownull: false,
    },

    celular:{
        type: Sequelize.STRING,
        allownull: false,
    },

    nome:{
        type: Sequelize.STRING,
        allownull: false,
    },

    data_de_cadastro:{
        type: Sequelize.STRING,
        timestamps: true,
    }
});

User.sync();

  module.exports = User;
  


