import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';


export interface UserProps {
    id?: number;
    age?: number;
    name?: string;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl),
        )
    }

    isAdminUser(): boolean {
        return this.get('id') === 1;
    }
}
