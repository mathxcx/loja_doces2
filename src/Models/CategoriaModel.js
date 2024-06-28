import mysql from "mysql2"
import config from "../Config.js"

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_categoria){
        let sql = `INSERT INTO categoria (nome_categoria) VALUES("${nome_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria inserida"])

            })

        });
    }

    read(){
        let sql = `SELECT * FROM categoria;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])

            })

        });
    }
    update(id_categoria,nome_categoria){
        let sql = `UPDATE categoria SET nome_categoria="${nome_categoria}" WHERE id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado!"])

            })

        });   


    }
    delete(id_categoria){
        let sql = `DELETE FROM categoria WHERE id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado!"])

            })

        });   

    }
}




//const categoria = new CategoriaModel()
//categoria.create("Argentinos")
//categoria.read()

export default new CategoriaModel();


