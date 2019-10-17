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

const printSummary = (item: Reportable) => {
    console.log(item.summary());
};

printSummary(oldCivic);