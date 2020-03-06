class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError
    pilot(): void {
        throw new Error();
        console.log('swish');
    }
}
//Object.defineProperty(), Object.getOwnPropertyDescriptor(boat, color)
// value: "color"
// writable: true
// enumerable: true
// configurable: true
function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
        try {
            method()
        }
        catch (e) {
            console.log('Oops, boat was sunk');
        }
    };
}

new Boat().pilot();

// logError(Boat.prototype, 'pilot');