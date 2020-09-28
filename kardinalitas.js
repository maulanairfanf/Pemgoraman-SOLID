// assosication
// class Seller {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
//  }

//  class User {
//     constructor(id, name, sellers) {
//         this._id = id;
//         this._name = name;
//         this._sellers = sellers;
//     }
//  }

//  aggregation
//  class Shop {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }

//     set seller(value) {
//         this._seller = value;
//     }

//     get seller() {
//         return this._seller;
//     }
//  }

//  class Sellerr {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
//  }

// composition

class User {
    constructor(id, name, address) {
        this._id = id;
        this._name = name;
        this._address = address;
    }
}

class Address {
    constructor(id, location) {
        this._id = id;
        this._location = location;
    }
}

const main = () => {
    const user = new User('1234', 'Khrisna', new Address('123', 'Bandung'));
    console.log(user)
};


main();


// depedensi  
class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    changePrice(value) {
        this._price = value;
    }
}

class ShopService {
    changeProductPrice(price, product) {
        product.changePrice(price);
    }
}

const mian = () => {
    const product = new Product("1301180294", "Sepatu", new ShopService("90000", "sepatu"))
    console.log(product)
}   

mian();