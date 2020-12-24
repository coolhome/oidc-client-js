export declare class SigninResponse {
    error: any;
    error_description: any;
    error_uri: any;
    code: any;
    state: any;
    id_token: any;
    session_state: any;
    access_token: any;
    token_type: any;
    scope: any;
    profile: any;
    expires_at: number;
    constructor(url: any, delimiter?: string);
    get expires_in(): number | string;
    set expires_in(value: number | string);
    get expired(): boolean;
    get scopes(): any;
    get isOpenIdConnect(): boolean;
}
