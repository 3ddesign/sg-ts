const add = (a: number, b: number) => {
    return a + b;
}; 

const subtract = (a: number, b: number): number => {
    return a - b;
}; 

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = function(message: string): void {
    console.log(message);
}

const throwError = function(message: string): never {
    throw new Error(message)
}

const todayWether = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void =>  {
    console.log(date);
    console.log(weather);
};

// ES2015 desctructuring
const logWeatherES2015 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};

logWeather(todayWether);
