interface Vehicle {
    name: string;
    year: Date;
    isBroken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printVehicle = (vehicle: Vehicle) => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);