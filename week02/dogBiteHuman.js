class Dog {
    bite(object) {
        object.hurt(5);
    }
}

class Human {
    constructor() {
        this.volumes = 100;
    }

    hurt(volume) {
        this.volumes -= volume;
        console.log(this.volumes);
    }
}

