let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// Buildin objects:
let now: Date = new Date();

// Array:
let colors: string[] = ['red', 'green'];
let numbers: number[] = [1,2,3];
let truthes: boolean[] = [false, true];

// Classes: 
class Car {

}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number}  = {
    x: 10,
    y: 20
};

// Function
const logNumer: (i: number) => void = (i: number) => {
    console.log(i);
};