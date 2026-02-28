export class Todo{
    constructor(public title: string, public index: number) {}

    public get_title(){
        return this.title;
    }

    public get_index(){
        return this.index;
    }
}