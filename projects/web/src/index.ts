import { User } from './models/User';

const user = new User({ name: 'new name', age: 0 });

user.on('change', () => {
    console.log('User was changed!');
});

user.set({ name: 'test' });