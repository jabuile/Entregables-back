import productM from './productManager.js'
import Product from './productManager.js'
// Se creará una instancia de la clase “ProductManager”
let products = [];
//let productM = new ProductManager(products,"C:\\Users\\jabui\\OneDrive\\Escritorio\\primer entregable back\\entregable_1_back\\");

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
products = productM.getProducts();
console.log("xxxxx" + products);
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

let objProduct = new Product("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25, null);
let id = productM.addProduct(objProduct);
console.log(id);

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

products = productM.getProducts();
console.log("xxxxx" + products);

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
objProduct2 = new Product("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2.id = id;
console.log(id);
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

objProduct.title = "Prod";
//console.log(JSON.stringify(products));

productM.updateProduct(objProduct);
productM.deleteProduct(objProduct.id);



objProduct2 = new Product("producto 1", "Este es un producto prueba", 200, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 2", "Este es un producto prueba", 2020, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 3", "Este es un producto prueba", 2030, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 4", "Este es un producto prueba", 2040, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 5", "Este es un producto prueba", 333, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 6", "Este es un producto prueba", 20440, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 7", "Este es un producto prueba", 65, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 8", "Este es un producto prueba", 20780, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 9", "Este es un producto prueba", 543, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);
objProduct2 = new Product("producto 10", "Este es un producto prueba", 8765, "sin imagen", "abc123", 25, null);
id = productM.addProduct(objProduct2);