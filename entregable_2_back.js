const fs = require('fs');


class ProductManager {
    constructor(products, path) {
      this.products = products;
      this.path = path;
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
      if (found === null){
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
                productB.stock  = product.stock;
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
   
  
  class Product {
    constructor(title, description, price, thumbnail, code, stock, id ) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.stock = stock;
      this.code = code;
      this.id = id;
    }
  }
  
  // Se creará una instancia de la clase “ProductManager”
let products =[];
let productM = new ProductManager(products,"C:\\Users\\jabui\\OneDrive\\Escritorio\\primer entregable back\\entregable_1_back\\");

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
products = productM.getProducts ();
console.log("xxxxx"+ products);
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
  
let objProduct =new Product ("producto prueba","Este es un producto prueba", 200, "sin imagen", "abc123", 25,null );
let id=productM.addProduct(objProduct);
console.log(id);

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

products = productM.getProducts ();
console.log("xxxxx"+ products);

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
objProduct2 =new Product ("producto prueba","Este es un producto prueba", 200, "sin imagen", "abc123", 25,null );
id=productM.addProduct(objProduct2);
objProduct2.id = id;
console.log(id);
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

objProduct.title = "Prod";
//console.log(JSON.stringify(products));

productM.updateProduct(objProduct);
productM.deleteProduct(objProduct.id);
