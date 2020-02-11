import { User } from '../models/User';

export class UserForm {
    constructor(public parent: Element, public model: User) {}

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick
        };
    }

    onSetAgeClick(): void {
        console.log('onSetAgeClick');
    }


    template(): string {
        return `<div>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <h1>User Form</h1>
        <input />
        <button>Click me</button>
        <button class="set-age">Set random age</button>
        </div>`;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}