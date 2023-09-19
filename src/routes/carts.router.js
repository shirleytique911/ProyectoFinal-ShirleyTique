const express = require('express');
const router = express.Router();
const fs = require('fs');

const cart =[ 
  {id:1, title:"manzana"},
  {id:2, title:"bananos"},
  {id:3, title:"naranjas"} ]




// Ruta POST /api/carts/:cid/product/:pid
router.post('/cart:cid/product/:pid', (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;
    try {
      const carts = JSON.parse(fs.readFileSync('./data/carrito.json', 'utf-8'));
      const cart = carts.find((c) => c.id === cartId);
      if (cart) {
        // Verifica si el producto ya existe en el carrito
        const existingProduct = cart.products.find((p) => p.product === productId);
        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          cart.products.push({ product: productId, quantity });
        }
        fs.writeFileSync('./data/carrito.json', JSON.stringify(carts, null, 2));
        res.json(cart.products);
      } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el producto al carrito' });
    }
  });
  
  module.exports = router;
  

  

