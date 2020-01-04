import { User } from './models/User';

const user = new User({ name: 'myname', age: 20});

user.on('change', () => {});
user.on('change2', () => {});
user.on('change3', () => {});

console.log(user);