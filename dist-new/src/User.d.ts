export interface UserOptions {
    id_token?: any;
    session_state?: any;
    access_token?: any;
    refresh_token?: any;
    token_type?: any;
    scope?: any;
    profile?: any;
    expires_at?: any;
    state?: any;
}
export declare class User {
    id_token: any;
    session_state: any;
    access_token: any;
    refresh_token: any;
    token_type: any;
    scope: any;
    profile: any;
    expires_at: any;
    state: any;
    constructor(options?: UserOptions);
    get expires_in(): number | string;
    set expires_in(value: number | string);
    get expired(): boolean;
    get scopes(): any;
    toStorageString(): string;
    static fromStorageString(storageString: any): User;
}
