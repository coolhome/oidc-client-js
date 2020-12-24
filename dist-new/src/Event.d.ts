export declare class Event {
    protected _name: any;
    protected _callbacks: any[];
    constructor(name: any);
    addHandler(cb: any): void;
    removeHandler(cb: any): void;
    raise(...params: any[]): void;
}
