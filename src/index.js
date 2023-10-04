import express from "express"
import ProductRouter from "./router/product.routes.js";
import CartRouter from "./router/carts.routes.js";

import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import * as path from "path"
import ProductManager from "./controllers/ProductManager.js";

import {Server} from "socket.io" 
import viewsRouter from "./router/views.routes.js"

const app = express()
const PORT=8080

const httpServer = app.listen(PORT,()=> console.log("Listen puerto 8080"))

const product =new ProductManager();

const SocketServer = new Server(httpServer)

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))
app.use("/", viewsRouter)

//Static
app.use("/", express.static(__dirname + "public"));

//socket
SocketServer.on("connection", (socket) => {
    console.log(`Usuario ${socket.id}`);

    socket.on("addProduct", async (productData) => {
        console.log('Datos  recibidos en el servidor:', productData)
        const result = await product.addProducts(productData);

        if (result === "Producto Agregado") {
            // lista de productos en tiempo real
            SocketServer.emit("productAdded", productData);
        }
    });
});

app.get("/", async (req, res) => {
    let allProducts = await product.getProducts()
 res.render("home", {
        title: "Express Avanzado / Handlebars",  
        products : allProducts
    })
})

app.get("/:id", async (req, res) => {
    let id = await product.getProductsById(req.params.id)
 res.render("id", {
        title: "Express Avanzado / Handlebars",  
        products :  id
    })
})



app.use("/api/products",ProductRouter)
app.use("/api/cart",CartRouter)



// app.listen(PORT,() =>{
//     console.log(`Servidor Express Puerto ${PORT}`);

// });