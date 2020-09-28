class Animal {
    walk() {
        console.log(`${this.constructor.name} walk!`);
    }
    leg(){
        console.log('Have legs')
    }
 }
  
 class Cat extends Animal {
    walk() {
        super.leg();
        super.walk();
        console.log(`Yeay! ${this.constructor.name} walked!`);
    }
 }
  
 const main = () => {
    const cat = new Cat();
    cat.walk()
 };
  
 main();