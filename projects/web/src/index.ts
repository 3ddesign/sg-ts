import { User } from './models/User';

const user = new User({ name: 'myname', age: 20});

user.on('change', () => {
    console.log('change1');

});
user.on('change', () => {
    console.log('change2');
});

user.trigger('change');