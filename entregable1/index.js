class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("No se encontro");
      }
    }
  
    codeUnique(code) {
        return !this.products.some((product) => product.code === code);
      }

    addProduct(title, description, price, thumbnail, code, stock) {
      if (!this.codeUnique(code)) {
        console.log("Error : El code del producto ya existe");
        return;
      }
  
      if (
        !title ||
        !description ||
        !price ||
        !thumbnail ||
        !code ||
        !stock
      ) {
        console.log("Error : Todos los campos son obligatorios");
        return;
      }
  
      const product = {
        id: this.nextId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      this.nextId++;
    }
  
  }
  
const manager = new ProductManager();
console.log(manager.getProducts());
manager.addProduct("cosa1", "asd", 10, "thumbnail.jpg", "jfur2", 1);
  
manager.addProduct("cosa1", "asd", 10, "thumbnail.jpg", "jfur2", 1);

console.log(manager.getProducts());
console.log(manager.getProductById(1));