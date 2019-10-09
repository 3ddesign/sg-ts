interface Vehicle {
    name: string;
    year: number;
    isBroken: boolean;
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    isBroken: true
};

const printVehicle = (vehicle: Vehicle) => {
    console.log(vehicle.name);
    console.log(vehicle.year);
};

printVehicle(oldCivic);