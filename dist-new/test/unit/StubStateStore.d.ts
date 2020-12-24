export declare class StubStateStore {
    item: any;
    error: any;
    set(key: any, value: any): Promise<void>;
    get(key: any): Promise<any>;
    remove(key: any): Promise<any>;
    getAllKeys(): Promise<any[]>;
    get length(): 1 | 0;
}
