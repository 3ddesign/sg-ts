@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError('Oops, boat was sunk')
    pilot(@parametrDecorator speed: string, @parametrDecorator genareteWake: string): void {
        // throw new Error();
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}
// Object.getOwnPropertyDescriptor(boat, color)
// value: "color"
// writable: true
// enumerable: true
// configurable: true

function parametrDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    console.log(key);
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

//decorator factory (return function):
function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                method()
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    }
}

new Boat().pilot('test', 'test');

// logError(Boat.prototype, 'pilot');