import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})


server.post("/categoria",CategoriaController.create)
server.get("/categoria",CategoriaController.read)
server.put("/categoria/:id_categoria",CategoriaController.update)
server.delete("/categoria/:id_categoria",CategoriaController.delete)

server.listen(5000)