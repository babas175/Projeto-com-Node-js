const CadastroService = require('../service/CadastroService');



class CadastroAction {
    constructor({
        id, cpf, email, bloco, apartamento, celular, data_de_cadastro, nome,
    }) {
        this.cpf= cpf;
        this.id = id;
        this.email = email;
        this.bloco = bloco;
        this.apartamento = apartamento;
        this.celular = celular;
        this.data_de_cadastro = data_de_cadastro;
        this.nome = nome;
    }

    async criar() {
        this.validar();
         const resultado = await CadastroService.inserir({
            cpf: this .cpf,
            email: this.email,
            bloco: this.bloco,
            apartamento: this.apartamento,
            celular: this.celular,
            data_de_cadastro: this.data_de_cadastro,
            nome: this.nome,
        });

        this.id = resultado.id;
    }


    async buscar() {
        const buscando = await CadastroService.pegarPorId(this.id);
        this.cpf = buscando.cpf;
        this.email = buscando.email;
        this.bloco = buscando.bloco;
        this.apartamento = buscando.apartamento;
        this.celular = buscando.celular;
        this.data_de_cadastro = buscando.data_de_cadastro;
        this.nome = buscando.nome;
    }


    async atualizar() {
        await CadastroService.pegarPorId(this.id);
        const campos = [ 'email', 'boloc', 'apartamento', 'celular', 'data_de_cadastro','nome'];
        const dadosParaAtualizar = {};
    
        campos.forEach((campo) => {
          const valor = this[campo];
          if (typeof valor === 'string' && valor.length > 0) {
            dadosParaAtualizar[campo] = valor;
          }
        });
        if (Object.keys(dadosParaAtualizar).length === 0) {
          throw new Error('Nao foram fornecidos dados para atualizar');
        }
        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar);
      }

      
  remover() {
    CadastroService.remover(this.id);
  }
    
  validar() {
    const campos = [ 'email', 'bloco', 'apartamento', 'celular','nome', 'data_de_cadastro'];

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor !== 'string' || valor.lenght === 0) {
        throw new Error(`O campo '${campo}' esta invalido`);
      }
    });
  }
}

module.exports = CadastroAction;