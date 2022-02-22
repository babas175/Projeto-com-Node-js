const cadastro = require('../models/cadastro')

module.exports = {
    listar() {
      return cadastro.findAll();
    },
  
    inserir(morador) {
      return cadastro.create(morador);
    },
  
    async pegarPorId(id) {
      const encontrado = await cadastro.findOne({
        where: {
          id,
        },
      });
      if (!encontrado) {
        throw new Error('morador  nao encontrado');
      }
  
      return encontrado;
    },
  
    atualizar(id, dadosParaAtualizar) {
      return cadastro.update(
        dadosParaAtualizar,
        {
          where: { id },
        },
      );
    },
    remover(id) {
      return cadastro.destroy({
        where: { id },
      });
    },
  
  };