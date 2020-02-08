export class UserForm {
    constructor(public parent: Element) {}

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseover:h1': this.onHeaderOver
        };
    }

    onHeaderOver(): void {
        console.log('onHeaderOver');
    }

    onButtonClick(): void {
        console.log('onButtonClick');
    }

    template(): string {
        return `<div>
        <h1>User Form</h1>
        <input />
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