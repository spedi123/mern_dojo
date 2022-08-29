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

const ninja1 = new Ninja("Peter")

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()