import { WebStorageStateStoreType } from './WebStorageStateStore';
export interface StateOptions {
    id?: any;
    data?: any;
    created?: number;
    request_type?: any;
}
export declare class State {
    protected _id: any;
    protected _data: any;
    protected _created: number;
    protected _request_type: any;
    constructor(options?: StateOptions);
    get id(): any;
    get data(): any;
    get created(): number;
    get request_type(): any;
    toStorageString(): string;
    static fromStorageString(storageString: any): State;
    static clearStaleState(storage: WebStorageStateStoreType, staleAge: number): Promise<any[]>;
}
