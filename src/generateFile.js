var ProductManager = require('./productManager.js');
var Product = require('./product.js');

const productManager = new ProductManager();

let products = [];

products.push(new Product("Titulo 1", "Descripcion 1", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",111,10,null));
products.push(new Product("Titulo 2", "Descripcion 2", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",222,20,null));
products.push(new Product("Titulo 3", "Descripcion 3", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",333,30,null));
products.push(new Product("Titulo 4", "Descripcion 4", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",444,40,null));
products.push(new Product("Titulo 5", "Descripcion 5", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",555,50,null));
products.push(new Product("Titulo 6", "Descripcion 6", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",666,60,null));
products.push(new Product("Titulo 7", "Descripcion 7", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",777,70,null));
products.push(new Product("Titulo 8", "Descripcion 8", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",888,80,null));
products.push(new Product("Titulo 9", "Descripcion 9", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",999,90,null));
products.push(new Product("Titulo 10", "Descripcion 10", 1, "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nyan_cat_250px_frame.PNG/220px-Nyan_cat_250px_frame.PNG",000,100,null));

for (let product of products) {
    productManager.addProduct(product);
}
