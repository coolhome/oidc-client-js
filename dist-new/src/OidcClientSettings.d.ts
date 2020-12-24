import { ClockService } from './ClockService';
import { WebStorageStateStoreType } from './WebStorageStateStore';
import { ResponseValidatorType } from './ResponseValidator';
import { MetadataServiceType } from './MetadataService';
export interface OidcClientSettingsOptions {
    authority?: string;
    metadataUrl?: string;
    metadata?: string;
    signingKeys?: JsonWebKey[];
    client_id?: string;
    client_secret?: string;
    response_type?: string;
    scope?: string;
    redirect_uri?: string;
    post_logout_redirect_uri?: string;
    prompt?: any;
    display?: any;
    max_age?: any;
    ui_locales?: any;
    acr_values?: any;
    resource?: any;
    response_mode?: any;
    filterProtocolClaims?: boolean;
    loadUserInfo?: boolean;
    staleStateAge?: number;
    clockSkew?: number;
    clockService?: ClockService;
    userInfoJwtIssuer?: any;
    stateStore?: WebStorageStateStoreType;
    ResponseValidatorCtor?: (settings: OidcClientSettings) => ResponseValidatorType;
    MetadataServiceCtor?: (settings: OidcClientSettings) => MetadataServiceType;
    extraQueryParams?: any;
    extraTokenParams?: any;
}
export declare class OidcClientSettings {
    _authority: string;
    protected _metadataUrl: string;
    protected _metadata: string;
    protected _signingKeys: JsonWebKey[];
    _client_id: any;
    protected _client_secret: any;
    protected _response_type: string;
    protected _scope: string;
    protected _redirect_uri: any;
    protected _post_logout_redirect_uri: any;
    protected _prompt: any;
    protected _display: any;
    protected _max_age: any;
    protected _ui_locales: any;
    protected _acr_values: any;
    protected _resource: any;
    protected _response_mode: any;
    _filterProtocolClaims: boolean;
    protected _loadUserInfo: boolean;
    protected _staleStateAge: number;
    protected _clockSkew: number;
    protected _clockService: ClockService;
    protected _userInfoJwtIssuer: string;
    protected _stateStore: WebStorageStateStoreType;
    protected _validator: ResponseValidatorType;
    protected _metadataService: MetadataServiceType;
    protected _extraQueryParams: {};
    protected _extraTokenParams: {};
    constructor(options?: OidcClientSettingsOptions);
    get client_id(): any;
    set client_id(value: any);
    get client_secret(): any;
    get response_type(): string;
    get scope(): string;
    get redirect_uri(): any;
    get post_logout_redirect_uri(): any;
    get prompt(): any;
    get display(): any;
    get max_age(): any;
    get ui_locales(): any;
    get acr_values(): any;
    get resource(): any;
    get response_mode(): any;
    get authority(): string;
    set authority(value: string);
    get metadataUrl(): string;
    get metadata(): string;
    set metadata(value: string);
    get signingKeys(): JsonWebKey[];
    set signingKeys(value: JsonWebKey[]);
    get filterProtocolClaims(): boolean;
    get loadUserInfo(): boolean;
    set loadUserInfo(value: boolean);
    get staleStateAge(): number;
    get clockSkew(): number;
    get userInfoJwtIssuer(): string;
    get stateStore(): WebStorageStateStoreType;
    get validator(): ResponseValidatorType;
    get metadataService(): MetadataServiceType;
    get extraQueryParams(): {};
    set extraQueryParams(value: {});
    get extraTokenParams(): {};
    set extraTokenParams(value: {});
    getEpochTime(): Promise<number>;
}
