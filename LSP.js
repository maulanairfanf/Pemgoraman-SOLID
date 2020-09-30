class Product {
    constructor() {
      if (this.constructor === Product) {
        throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
      }
    }
    
    get name() {
      if (this.constructor === Product) {
        throw new TypeError('Cannot access abstract property');
      }
      return this._name;
    }
    
    set name(value) {
      if (this.constructor === Product) {
        throw new TypeError('Cannot access abstract property');
      }
      this._name = value;
    }
    
    
    getProductInfo() {
      // some magic code
    }
   }
    
   class FoodProduct extends Product {
    constructor() {
      super();
      if (this.constructor === FoodProduct) {
        throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
      }
    }
    
    get expiredDate() {
      if (this.constructor === FoodProduct) {
        throw new TypeError('Cannot access abstract property');
      }
      return this._expiredDate;
    }
    
    set expiredDate(value) {
      if (this.constructor === FoodProduct) {
        throw new TypeError('Cannot access abstract property');
      }
      this._expiredDate = value;
    }
   }
    
   class Vegetable extends FoodProduct {
    get name() {
      return 'Broccoli';
    }
    
    get expiredDate() {
      return new Date();
    }
   }
    
   class Smartphone extends Product {
    get name() {
      return 'Samsung S10+ Limited Edition';
    }
   }