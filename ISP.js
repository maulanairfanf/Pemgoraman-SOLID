class Gopay extends eWalletProviderMixins(PaymentProvider) {
    paymentName() { }
    amount() { }
    accountID() { }
    walletProviderID() { }
 }
  
 class Mandiri extends bankProviderMixins(PaymentProvider) {
    paymentName() { }
    amount() { }
    bankID() { }
    virtualAccount() { }
 }
  
 class BNI extends bankProviderMixins(PaymentProvider) {
    paymentName() { }
    amount() { }
    bankID() { }
    virtualAccount() { }
 }

 class OVO extends eWalletProviderMixins(PaymentProvider) {
    paymentName() { }
    amount() { }
    accountID() { }
    walletProviderID() { }
 }