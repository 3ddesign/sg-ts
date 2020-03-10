import 'reflect-metadata';


// EXAMPLE WITH CLASS

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vvrrrr');
    }
}
function get(path: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
       const secret =  Reflect.getMetadata('secret', target.prototype, key);
       console.log(secret);
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

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
