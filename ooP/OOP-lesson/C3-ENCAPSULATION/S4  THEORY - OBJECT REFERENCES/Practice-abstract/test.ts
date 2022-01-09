abstract class Animal{
    protected name: string
    constructor(name: string) {
        this.name=name
    }
    abstract playSound(): void;
}

class Cat extends Animal{
    constructor(name: string) {
        super(name)
    }
    playSound() {
        console.log('Meooww!!');
    }
}
class Dog extends Animal{
    constructor(name: string) {
        super(name)
    }
    playSound() {
        console.log('Woof!!!');
        
    }
}

let jery = new Cat('Jery');
jery.playSound()
let kathy = new Dog('Kathy');
kathy.playSound()