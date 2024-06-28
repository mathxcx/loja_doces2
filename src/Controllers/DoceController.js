import DoceModel from "../Models/DoceModel.js"

class DoceController{
    constructor(){

    }

    create(req,res){
        const nome_doce = req.body.nome_doce
        const id_categoria = req.body.id_categoria
        DoceModel.create(nome_doce,id_categoria).then(
            resposta =>{
                console.debug("Cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        DoceModel.read().then(
            resposta =>{
                console.debug("Exibindo Doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao exibir doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    update(req,res){
        const id_doce = req.params.id_doce
        const nome_doce = req.body.nome_doce
        const id_categoria = req.body.id_categoria
        DoceModel.update(id_doce,nome_doce,id_categoria).then(
            resposta =>{
                console.debug("Atualizando Doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao atualizar doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_doce = req.params.id_doce
        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Deletando Doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}





export default new DoceController()