class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, res, power) {
        super(name, cost);
        this.res = res;
        this.power = power;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

const unit1 = new Unit ('Red Belt Ninja', 3, 3, 4)
const unit2 = new Unit ('Black Belt Ninja', 4, 5, 4)

const effect1 = new Effect('Hard Algorithm', 2, 'increase target\'s resilience by 3', 'resilience', +3)
const effect2 = new Effect('Unhandled Promise Rejection', 1, 'reduce target\'s resilience by 2', 'resilience', -2)
const effect3 = new Effect('Pair Programming', 3, 'increase target\'s power by 2', 'power', +2)