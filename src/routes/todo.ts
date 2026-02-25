export class Todo {
    constructor(public title: string, public index: number) {}

    public getTitle() {
        return this.title;
    }

    public getIndex() {
        return this.index;
    }
}