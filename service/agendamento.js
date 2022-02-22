const agendamento = require('../models/agendamento')

module.exports = {
    listar() {
      return agendamento.findAll();
    },
  
    inserir(agendamento) {
      return agendamento.create(agendamento);
    },
  
    async pegarPorId(email) {
      const encontrado = await agendamento.findOne({
        where: {
          email,
        },
      });
      if (!encontrado) {
        throw new Error('morador  nao encontrado');
      }
  
      return encontrado;
    },
};