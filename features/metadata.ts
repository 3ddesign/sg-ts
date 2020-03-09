import 'reflect-metadata';


// EXAMPLE WITH CLASS

class Plane {
    color: string = 'red';

    @markFunction
    fly(): void {
        console.log('vvrrrr');
    }
}

function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata('secret', 123, target, key)
} 

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret);



// EXAMPLE WITH VARIABLE:

// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);
// console.log(plane);

// const metadataNote = Reflect.getMetadata('note', plane);
// const metadataHight = Reflect.getMetadata('height', plane);
// console.log(metadataNote);
// console.log(metadataHight);
