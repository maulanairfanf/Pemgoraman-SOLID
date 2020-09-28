class Animal {
    walk() {
        console.log(`${this.constructor.name} walk!`);
    }
 }

 class Carnivore extends Animal {
     eat(){
         console.log(`${this.constructor.name} eating meat!`)
     }
 }
  
 class Cat extends Animal {
    walk() {
        super.walk();
        console.log(`Yeay! ${this.constructor.name} walked!`);
    }
 }

 class Dog extends Carnivore {
    sound(){
        console.log(`${this.constructor.name} sounds like gug... gug..`)
    }
 }
  
 const main = () => {
    const animal = new Animal();
    animal.walk()
    const cat = new Cat();
    cat.walk()
    const dog = new Dog();
    dog.eat()
    dog.walk()
    dog.sound()
 };
  
 main();