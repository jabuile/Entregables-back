class ProductManager {
  constructor(products) {
    this.products = products;
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
}

//consultar al tutor o prof si el if puede o no retornar 

//  if (found != null) {
//     return found;
//  }else{
//     console.log("first");
    
//  }
 
//probandfind a code

// const found = this.products.find((p) =>(p.code = pro.code));
// if (found != null) {
//     return null;
// }

class Product {
  constructor(title, description, price, thumbnail, code, stock, id) {
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
let productM = new ProductManager(products);

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
objProduct =new Product ("producto prueba","Este es un producto prueba", 200, "sin imagen", "abc123", 25,null );
id=productM.addProduct(objProduct);
console.log(id);
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

