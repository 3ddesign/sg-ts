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
    console.log('target: ', target);
    console.log('key: ', key);
}

// logError(Boat.prototype, 'pilot');