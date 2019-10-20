class Vehicle {
    protected honk(): void {
        console.log('test2');
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('rewrited');
    }
    
    public strartDrivingProcess() {
        this.drive();
        this.honk();
    }

}

const car = new Car();

car.strartDrivingProcess();