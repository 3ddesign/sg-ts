class Vehicle {
    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('test2');
    }
}

const vehicle  = new Vehicle('orange');

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }


    private drive(): void {
        console.log('rewrited');
    }
    
    public strartDrivingProcess() {
        this.drive();
        this.honk();
    }

}

const car = new Car(4, 'red');
car.strartDrivingProcess();