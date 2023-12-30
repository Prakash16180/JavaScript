class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    run(){
        console.log(this.name + " is running");
    }

    shout(){
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating Banana");
    }
}

const an1 = new Animal("Bruno", "white");
const an2 = new Monkey("Chimpu", "orange");

an1.shout();
an2.eatBanana();