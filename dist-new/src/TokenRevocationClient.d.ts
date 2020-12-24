import { MetadataService } from './MetadataService';
import { OidcClientSettings } from './OidcClientSettings';
export declare class TokenRevocationClient {
    private _settings;
    private _XMLHttpRequestCtor;
    private _metadataService;
    constructor(settings: OidcClientSettings, XMLHttpRequestCtor?: {
        new (): XMLHttpRequest;
        prototype: XMLHttpRequest;
        readonly DONE: number;
        readonly HEADERS_RECEIVED: number;
        readonly LOADING: number;
        readonly OPENED: number;
        readonly UNSENT: number;
    }, MetadataServiceCtor?: typeof MetadataService);
    revoke(token: any, required: any, type?: string): Promise<unknown>;
    _revoke(url: any, client_id: any, client_secret: any, token: any, type: any): Promise<unknown>;
}
