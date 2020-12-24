import { OidcClientSettings } from './OidcClientSettings';
import { WebStorageStateStoreType } from './WebStorageStateStore';
export declare class OidcClient {
    protected _settings: OidcClientSettings;
    constructor(settings?: {});
    get _stateStore(): WebStorageStateStoreType;
    get _validator(): import("./ResponseValidator").ResponseValidatorType;
    get _metadataService(): import("./MetadataService").MetadataServiceType;
    get settings(): OidcClientSettings;
    get metadataService(): import("./MetadataService").MetadataServiceType;
    createSigninRequest({ response_type, scope, redirect_uri, data, state, prompt, display, max_age, ui_locales, id_token_hint, login_hint, acr_values, resource, request, request_uri, response_mode, extraQueryParams, extraTokenParams, request_type, skipUserInfo }: {
        response_type?: any;
        scope?: any;
        redirect_uri?: any;
        data?: any;
        state?: any;
        prompt?: any;
        display?: any;
        max_age?: any;
        ui_locales?: any;
        id_token_hint?: any;
        login_hint?: any;
        acr_values?: any;
        resource?: any;
        request?: any;
        request_uri?: any;
        response_mode?: any;
        extraQueryParams?: any;
        extraTokenParams?: any;
        request_type?: any;
        skipUserInfo?: any;
    }, stateStore: any): any;
    readSigninResponseState(url: any, stateStore: any, removeState?: boolean): any;
    processSigninResponse(url: any, stateStore: any): any;
    createSignoutRequest({ id_token_hint, data, state, post_logout_redirect_uri, extraQueryParams, request_type, }?: any, stateStore?: WebStorageStateStoreType): any;
    readSignoutResponseState(url: any, stateStore: any, removeState?: boolean): any;
    processSignoutResponse(url: any, stateStore: any): any;
    clearStaleState(stateStore?: WebStorageStateStoreType): Promise<any[]>;
}
