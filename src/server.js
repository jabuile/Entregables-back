var express = require('express');
var ProductManager = require('./productManager.js');
var Product = require('./product.js');

const app = express();

var productM = new ProductManager();

app.use(express.static("public"));
// Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.
//  Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.
app.get('/products', (req, res) => {
    var productM = new ProductManager();
    let listado = productM.getProducts();
    let limit = req.query.limit;
    if (limit === undefined) {
        res.send(JSON.stringify(listado));
    } else {
        res.send(JSON.stringify(listado.slice(0, limit)));
    }
});

// Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.
// Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.
app.get('/products/:id', (req, res) => {
    let product = productM.getProductById(req.params.id);
    if (product === undefined) {
        res.send("producto no encontrado ");
    } else {
        res.send(JSON.stringify(product));
    }
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log("servidor ejecutandose en el puerto: ", PORT);
});
