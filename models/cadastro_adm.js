const Sequelize = require('sequelize');

const db = require('../database/db');


const cadastra2  = db.define('cadastroAdm',{
 
    
    email:{
        type: Sequelize.STRING,
        allownull: false,
    },

        crachaNumero :{
        type: Sequelize.STRING,
        allownull: false,
    },

    senha :{
        type: Sequelize.STRING,
        allownull: false,
    }

});

cadastra2.sync();

  module.exports = cadastra2;
  