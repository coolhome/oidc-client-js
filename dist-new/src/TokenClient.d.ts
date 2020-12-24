import { JsonService } from './JsonService';
import { MetadataService } from './MetadataService';
import { OidcClientSettings } from './OidcClientSettings';
import { AccessTokenResponse } from './AccessTokenResponse';
export declare class TokenClient {
    private _settings;
    private _jsonService;
    private _metadataService;
    constructor(settings: OidcClientSettings, JsonServiceCtor?: typeof JsonService, MetadataServiceCtor?: typeof MetadataService);
    exchangeCode(args?: any): Promise<any>;
    exchangeRefreshToken(args?: any): Promise<AccessTokenResponse>;
}
