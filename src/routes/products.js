// const express = require('express');
// const router = express.Router();
// const fs = require('fs');

// // Ruta raíz GET /api/products
// router.get('/', (req, res) => {
//   try {
//     const limit = req.query.limit || 10; // Valor predeterminado
//     const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
//     const limitedProducts = products.slice(0, limit);
//     res.json(limitedProducts);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los productos' });
//   }
// });

// // Ruta GET /api/products/:pid
// router.get('/:pid', (req, res) => {
//   const productId = req.params.pid;
//   try {
//     const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
//     const product = products.find((p) => p.id === productId);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ error: 'Producto no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener el producto' });
//   }
// });

// // Ruta raíz POST /api/products
// router.post('/', (req, res) => {
//   try {
//     const newProduct = req.body;
//     // Genera un nuevo ID único (puedes usar un paquete como `uuid`)
//     newProduct.id = generateUniqueId();
//     // Agrega el nuevo producto a productos.json
//     const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
//     products.push(newProduct);
//     fs.writeFileSync('./data/productos.json', JSON.stringify(products, null, 2));
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el producto' });
//   }
// });

// // Ruta PUT /api/products/:pid
// router.put('/:pid', (req, res) => {
//   const productId = req.params.pid;
//   const updatedProduct = req.body;
//   try {
//     const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
//     const index = products.findIndex((p) => p.id === productId);
//     if (index !== -1) {
//       // No se actualiza ni elimina el ID
//       updatedProduct.id = productId;
//       products[index] = updatedProduct;
//       fs.writeFileSync('./data/productos.json', JSON.stringify(products, null, 2));
//       res.json(updatedProduct);
//     } else {
//       res.status(404).json({ error: 'Producto no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al actualizar el producto' });
//   }
// });

// // Ruta DELETE /api/products/:pid
// router.delete('/:pid', (req, res) => {
//   const productId = req.params.pid;
//   try {
//     const products = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
//     const filteredProducts = products.filter((p) => p.id !== productId);
//     fs.writeFileSync('./data/productos.json', JSON.stringify(filteredProducts, null, 2));
//     res.json({ message: 'Producto eliminado con éxito' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar el producto' });
//   }
// });

// module.exports = router;
