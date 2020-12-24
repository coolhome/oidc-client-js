export declare class InMemoryWebStorage implements Storage {
    private _data;
    constructor();
    [name: string]: any;
    clear(): void;
    getItem(key: any): any;
    setItem(key: any, value: any): void;
    removeItem(key: any): void;
    get length(): number;
    key(index: any): string;
}
