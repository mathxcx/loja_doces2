import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){

    }

    create(req,res){
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.create(nome_categoria).then(
            resposta =>{
                console.debug("Cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        CategoriaModel.read().then(
            resposta =>{
                console.debug("Exibindo Categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro exibindo uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    update(req,res){
        const id_categoria = req.params.id_categoria
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.update(id_categoria,nome_categoria).then(
            resposta =>{
                console.debug("Atualizando Categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_categoria = req.params.id_categoria
        CategoriaModel.delete(id_categoria).then(
            resposta =>{
                console.debug("Deletando Categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}





export default new CategoriaController()