
// const express = require('express');
// const app = express();
// const port = 8080;

//milddw
// app.use(express.json())
// app.use(express.urlencoded({extended: true }))



// let frutas=[
//   {id:1, title:"manzana"},
//   {id:2, title:"bananos"},
//   {id:3, title:"naranjas"}
// ]


// //para obtener un recurso
// app.get("/frutas",(req,res)=>{
//   res.json(frutas) // se obtiene un array de productos
// })

// //aqui lo obtuve por Id
// app.get("/frutas/:id",(req,res)=>{
//   const frutaId =parseInt(req.params.id)
//   const fruta = frutas.find((fruta)=> fruta.id===frutaId)

//   if(fruta){
//     res.json(fruta)
//   }else{
//     res.json(400).json({message: "fruta no encontrada"})
//   }
//  //aqui realice una validacion de donde la condicion no se cumpla muestre el mensaje
// })

// //subir un nuevo producto o tarea
// app.post("/frutas",(req,res)=>{
//   const{title} =req.body
//   const newfruta ={id: frutas.length +1, title:title || "pera"}
//   frutas.push(newfruta)
//   res.status(281).json(newfruta)//producto agregado
// })


// //modificar un recurso
// app.put("/frutas/:id",(req,res)=>{
//   const frutaId =parseInt(req.params.id)
//   const fruta =frutas.find((fruta)=> fruta.id === frutaId)

//   if(fruta){
//     const {title} =req.body
//     fruta.title=title
//     res.json()
//   }else {
//     res.status(400).json({message:"fruta no encontrada"})
//   }

// })


// //eliminar un recurso
// app.delete("/frutas/:id",(req,res)=>{
//   const frutaId = parseInt(req.params.id)
//   frutas = frutas.filter((fruta)=> fruta.id !==frutaId)
//   res.json({message:"fruta eliminada correctamente"})
// })
