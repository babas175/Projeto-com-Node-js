const Sequelize = require('sequelize');

const db = require('../database/db');


const reservacao = db.define('agendamento',{
    
    cpf:{
        type: Sequelize.STRING,
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

    data_reservada:{
        type: Sequelize.STRING,
        allownull: false,
    },

    espaço_reservado:{
        type: Sequelize.STRING,
        allownull: false,
    },

    data_de_reservacao:{
        type: Sequelize.STRING,
        timestamps: true,
    }
});

reservacao.sync();

  module.exports = reservacao;
  