let eWalletProviderMixins = Base => class extends Base {
   accountID() {}
   walletProviderID() {}
};

let bankProviderMixins = Base => class extends Base {
   bankID() {
      console.log("bank id")
   }
   virtualAccount() {}
};

class PaymentProvider {
   paymentName() {
      console.log("payment provider")
   }
   amount() {
      console.log("amount")
   }
}

class Gopay extends eWalletProviderMixins(PaymentProvider) {
   paymentName() {}
   amount() {}
   accountID() {}
   walletProviderID() {}
}

class Mandiri extends bankProviderMixins(PaymentProvider) {
   paymentName() {}
   amount() {}
   bankID() {}
   virtualAccount() {}
}

class BNI extends bankProviderMixins(PaymentProvider) {
   paymentName() {}
   amount() {}
   bankID() {}
   virtualAccount() {}
}

class OVO extends eWalletProviderMixins(PaymentProvider) {
   paymentName() {}
   amount() {}
   accountID() {}
   walletProviderID() {}
}

const main = () => {
   const bni = new BNI()
   bni.bankID()

}

main()