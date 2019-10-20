class Vehicle {
    drive(): void {
        console.log('test');
    }

    honk(): void {
        console.log('test2');
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('rewrited');
    }

}

const car = new Car();

car.drive();
car.honk();