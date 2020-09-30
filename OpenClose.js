class ShippingOrderService {
    checkout(product, shipping) {
        const costShipping = shipping.calculate(product);
        console.log(costShipping)
        /** Code to do check **/
    }
}

class Shipping {
    constructor() {
        if (this.constructor === Shipping) {
            throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
        }
    }

    /**
     * Implementation required
     */
    calculate(product) {
        throw new Error('You have to implement the method calculate!');
    }
}

class JNEShipping extends Shipping {
    
    calculate(product) {
        product = 2;
        return product;
    }
}

class TIKIShipping extends Shipping {
    calculate(product) {
        return /** calculate amount of this type with product*/;
    }
}

class POSINDOShipping extends Shipping {
    calculate(product) {
        return /** calculate amount of this type with product*/;
    }
}
class SiCepatShipping extends Shipping {
    calculate(product) {
        return /** calculate amount of this type with product*/;
    }
}


const main = () => {
    const shiping = new ShippingOrderService(JNEShipping, new Shipping(JNEShipping))
    shiping.calculate()
    // console.log(shiping)
    // console.log(shiping)
    // shiping.checkout()
    // shiping.calculate()
}

main()


const testing = new ShippingOrderService();
testing.checkout()
console.log(testing)