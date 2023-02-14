const fs = require('fs');
const Product = require('./product.js');

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./";
  }

  addProduct(product) {
    if (
      product.title != "" &&
      product.description != "" &&
      product.price != "" &&
      product.thumbnail != "" &&
      product.stock != "" &&
      product.code != ""
    ) {
      if (this.products.length > 0) {
        for (let productB of this.products) {
          if (product.code === productB.code) {
            return null;
          }
        }
      }
      let id = performance.now();
      product.id = id;
      this.products.push(product);
      return id;
    }
    return null;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const found = this.products.find((p) => (p.id = id));
    if (found === null) {
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
    console.log(JSON.stringify(product));

    console.log(JSON.stringify(products));
    for (let productB of this.products) {
      if (product.id === productB.id) {

        productB.description = product.description;
        productB.price = product.price;
        productB.title = product.title;
        productB.thumbnail = product.thumbnail;
        productB.stock = product.stock;
        productB.code = product.code;
        fs.writeFileSync(this.path + "Productos.txt", JSON.stringify(products));

        return;
      }

    }

    console.log("producto no encontrados");
  }

  deleteProduct(id) {

    this.products = this.products.filter((p) => (p.id != id));
    console.log(JSON.stringify(this.products));
    fs.writeFileSync(this.path + "Productos.txt", JSON.stringify(this.products));
  }

}

module.exports = ProductManager;
