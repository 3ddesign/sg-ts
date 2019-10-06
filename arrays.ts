
let carMakers: string[];
carMakers = ['ford', 'toyota', 'chevy'];

const dates: string[][] = [];

// help with inference when extracting variables

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incopatible values

carMakers.pop(100);

// help with map

carMakers.map((car: string): string => {
    return car.toLocaleLowerCase();
});

// Flexible types: 

const importantDates: (Date | string)[] = [new Date(), '2014-10-10']
importantDates.push(new Date());
importantDates.push('2015-11-11');