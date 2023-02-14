const fs = require('fs');
const Product = require('./product.js');

class ProductManager {
  constructor() {
    this.path = "./";
  }

  addProduct(product) {
    let products=this.getProductsFromFile();
    if (
      product.title != "" &&
      product.description != "" &&
      product.price != "" &&
      product.thumbnail != "" &&
      product.stock != "" &&
      product.code != ""
    ) {
      if (products.length > 0) {
        for (let productB of products) {
          if (product.code === productB.code) {
            return null;
          }
        }
      }
      let id = performance.now();
      product.id = id;
      products.push(product);
      this.sendProductsToFile(products);
      return id;
    }
    return null;
  }

  getProducts() {
    return this.getProductsFromFile();
  }

  getProductsFromFile() {
    if (fs.existsSync(this.path+"Productos.txt"))
      return JSON.parse(fs.readFileSync(this.path+"Productos.txt"));
    else
      return [];
  }

  sendProductsToFile(products) {
    fs.writeFileSync(this.path + "Productos.txt", JSON.stringify(products));
  }

  getProductById(id) {
    let products=this.getProductsFromFile();
    const found = products.find(p => p.id == id);
    if (found === undefined) {
      console.log("not found");
    }
    return found;
  }

  /*Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, 
  así también como el campo a actualizar (puede ser el objeto completo, como en una DB), 
  y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
  Debe tener un método deleteProduct, el cual debe recibir un id y 
  debe eliminar el producto que tenga ese id en el archivo.
 */
  updateProduct(product) {
    let products=this.getProductsFromFile();
    for (let productB of products) {
      if (product.id === productB.id) {

        productB.description = product.description;
        productB.price = product.price;
        productB.title = product.title;
        productB.thumbnail = product.thumbnail;
        productB.stock = product.stock;
        productB.code = product.code;
        this.sendProductsToFile(products);

        return;
      }

    }
  }

  deleteProduct(id) {
    products = products.filter((p) => (p.id != id));
    this.sendProductsToFile(products);
  }

}

module.exports = ProductManager;
