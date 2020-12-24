import { JsonService } from './JsonService';
import { OidcClientSettings } from './OidcClientSettings';
export interface MetadataServiceType {
    resetSigningKeys(): any;
    getMetadata(): Promise<string>;
    getIssuer(): Promise<string>;
    getAuthorizationEndpoint(): Promise<string>;
    getUserInfoEndpoint(): Promise<string>;
    getTokenEndpoint(optional: boolean): Promise<string>;
    getCheckSessionIframe(): Promise<string>;
    getEndSessionEndpoint(): Promise<string>;
    getRevocationEndpoint(): Promise<string>;
    getKeysEndpoint(): Promise<string>;
    _getMetadataProperty(name: string, optional: boolean): Promise<any>;
    getSigningKeys(): Promise<JsonWebKeyStoreKey[]>;
}
export declare type JsonWebKeyStoreKey = JsonWebKey & {
    kid?: string;
};
export interface JsonWebKeyStore {
    keys: JsonWebKeyStoreKey[];
}
export declare class MetadataService implements MetadataServiceType {
    private _settings;
    private _jsonService;
    private _metadataUrl;
    constructor(settings?: OidcClientSettings, JsonServiceCtor?: (settings?: any) => JsonService);
    get metadataUrl(): any;
    resetSigningKeys(): void;
    getMetadata(): Promise<any>;
    getIssuer(): Promise<any>;
    getAuthorizationEndpoint(): Promise<any>;
    getUserInfoEndpoint(): Promise<any>;
    getTokenEndpoint(optional?: boolean): Promise<any>;
    getCheckSessionIframe(): Promise<any>;
    getEndSessionEndpoint(): Promise<any>;
    getRevocationEndpoint(): Promise<any>;
    getKeysEndpoint(): Promise<any>;
    _getMetadataProperty(name: string, optional?: boolean): Promise<any>;
    getSigningKeys(): Promise<JsonWebKey[]>;
}
