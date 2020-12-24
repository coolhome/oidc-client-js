export interface WebStorageStateStoreType {
    set(key: any, value: any): Promise<void>;
    get(key: any): Promise<string | null>;
    remove(key: any): Promise<string>;
    getAllKeys(): Promise<string[]>;
}
export declare class WebStorageStateStore implements WebStorageStateStoreType {
    private _store;
    private _prefix;
    constructor({ prefix, store }?: {
        prefix?: string;
        store?: Storage;
    });
    set(key: any, value: any): Promise<any>;
    get(key: any): Promise<string>;
    remove(key: any): Promise<string>;
    getAllKeys(): Promise<string[]>;
}
