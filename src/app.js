const express = require('express');
const app = express();
const port = 8080;
const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/carts.router');

app.use(express.json());

// // Rutas para productos
app.use('/api/products', productsRouter);

// // Rutas para carritos
app.use('/api/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});







