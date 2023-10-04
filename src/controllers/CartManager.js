import { promises as fs } from "fs";
import { nanoid } from "nanoid";
import ProductManager from "./ProductManager.js";


const productALL =new ProductManager

class CartManager {
    constructor(){
    this.path ="./src/models/carts.json"
    this.nextId = null;
    this.initNextId()
}
async initNextId() {
    this.nextId = await this.calculateNextId();
}

calculateNextId = async () => {
    try {
        let carts = await this.readCarts();
        if (carts.length === 0) {
            return 1;
        } else {
            const maxId = Math.max(...carts.map((cart) => parseInt(cart.id)));
            return maxId + 1;
        }
    } catch (error) {
        console.error("Error al calcular ", error);
        return null;
    }
}


    readCarts =async ()=>{
        let carts =await fs.readFile(this.path, "utf-8");
        return JSON.parse(carts);  
      };



writeCarts = async (carts) =>{
    await fs.writeFile(this.path, JSON.stringify(carts));
};

exist = async (id)=>{
    let carts =await this.readCarts();
    return carts.find(carts => carts.id === id);
}


addCarts = async ()  =>{
    let cartsOld= await this.readCarts();
    let id = nanoid(4)
    let cartsConcat = [{id :id, products : []}, ...cartsOld]
    await this.writeCarts(cartsConcat)
    return " carrito agregado"

}
getCartsById =async (id) =>{
    let cartsById = await this.exist(id)
    if(!cartsById) return "Carrito  No existe"
    return cartsById
 };
 addProductInCart =async (cartId,productId) =>{
    let cartsById = await this.exist(cartId)
    if(!cartsById) return" Carrito No Existe"
    let productById = await productALL.exist(productId)
    if(!cartsById) return "Producto No Encontrado"

    let cartsALL = await this.readCarts()
    let cartFilter = cartsALL.filter((cart) => cart.id != cartId)



    if(cartsById.products.some((prod) => prod.id === productId)){
        let moreProductInCart =cartsById.products.find((prod) => prod.id === productId);
        
        moreProductInCart.cantidad++;
        console.log(moreProductInCart.cantidad);
        let cartsConcat =[cartsById, ...cartFilter];
        await this.writeCarts(cartsConcat)
        return "Producto SUMADO Al carrito con exito"
    }
    

    cartsById.products.push({id: productById.id, cantidad: 1})
    let cartsConcat =[cartsById, ...cartFilter]
     await this.writeCarts(cartsConcat);
    return "Producto Agregado Al carrito con exito"
 }

}

export default CartManager