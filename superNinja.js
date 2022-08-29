class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name is ${this.name}`);
    }

    showStats() {
        console.log(`${this.name}'s stats : health - ${this.health}, speed - ${this.speed}, strength - ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log("Increase health 10!");
    }
}
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWsidom() {
        this.drinkSake();
    }
}

const sensei1 = new Sensei("Super Ninja")
sensei1.sayName()
sensei1.showStats()
sensei1.drinkSake()
sensei1.showStats()
sensei1.speakWsidom()
sensei1.speakWsidom()
sensei1.showStats()