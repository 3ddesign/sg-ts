import { Model } from './Model';


export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {}