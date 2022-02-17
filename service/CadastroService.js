const cadastro = require('../models/cadastro')

module.exports = {
    listar() {
      return cadastro.findAll();
    },
  
    inserir(morador) {
      return cadastro.create(morador);
    },
  
    async pegarPorId(cpf) {
      const encontrado = await cadastro.findOne({
        where: {
          cpf,
        },
      });
      if (!encontrado) {
        throw new Error('morador  nao encontrado');
      }
  
      return encontrado;
    },
  
    atualizar(cpf, dadosParaAtualizar) {
      return cadastro.update(
        dadosParaAtualizar,
        {
          where: { cpf },
        },
      );
    },
    remover(cpf) {
      return cadastro.destroy({
        where: { cpf },
      });
    },
  
  };