const express = require('express');
const router = express.Router();
const CadastroService = require('../service/CadastroService')
const CadastroAction = require('../action/cadastro_action')




router.get('/', async (requisicao, resposta) => {
    const resultados = await CadastroService.listar()
    resposta.status(200)
    resposta.send(
            JSON.stringify(resultados)
    )

})


router.post('/', async (requisicao, resposta) => {
    try{
        const dadosRecebidos = requisicao.body
        const cadastro_action = new CadastroAction(dadosRecebidos)
        await cadastro_action.criar()
        resposta.status(201)
        resposta.send(
                JSON.stringify(cadastro_action)
        )
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
  
})



router.get('/:idMorador',  async (requisicao, resposta)=> {
    try{
        const id = requisicao.params.idMorador
        const cadastro_action = new CadastroAction ({ id: id})
        await cadastro_action.buscar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(cadastro_action)
        )
    }catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})


router.delete('/:idMorador', async (requisicao, resposta) => {
    try{
        const id = requisicao.params.idMorador
        const cadastro_action = new CadastroAction({id: id})
        await cadastro_action.buscar()
        await cadastro_action.remover()
        resposta.status(204)
        resposta.send()
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
   
})



router.put('/:cpfMorador', async (requisicao, resposta) => {
    try{
        const id = requisicao.params.cpfMorador
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const cadastro_action = new CadastroAction(dados)
        await cadastro_action.atualizar()
        resposta.status(204)
        resposta.send()

    }catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )
    }
})


module.exports = router;