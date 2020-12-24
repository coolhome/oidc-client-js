import { SigninState } from './SigninState';
export declare class SigninRequest {
    state: SigninState;
    url: any;
    constructor({ url, client_id, redirect_uri, response_type, scope, authority, data, prompt, display, max_age, ui_locales, id_token_hint, login_hint, acr_values, resource, response_mode, request, request_uri, extraQueryParams, request_type, client_secret, extraTokenParams, skipUserInfo }: {
        url: any;
        client_id: any;
        redirect_uri: any;
        response_type: any;
        scope: any;
        authority: any;
        data: any;
        prompt: any;
        display: any;
        max_age: any;
        ui_locales: any;
        id_token_hint: any;
        login_hint: any;
        acr_values: any;
        resource: any;
        response_mode: any;
        request: any;
        request_uri: any;
        extraQueryParams: any;
        request_type: any;
        client_secret: any;
        extraTokenParams: any;
        skipUserInfo: any;
    });
    static isOidc(response_type: any): boolean;
    static isOAuth(response_type: any): boolean;
    static isCode(response_type: any): boolean;
}
