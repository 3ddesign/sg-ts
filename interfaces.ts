interface Reportable {
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

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Summary sugar: ${this.name}`;
    }
}

const printSummary = (item: Reportable) => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);