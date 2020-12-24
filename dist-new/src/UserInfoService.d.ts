import { JsonService } from './JsonService';
import { MetadataServiceType } from './MetadataService';
import { OidcClientSettings } from './OidcClientSettings';
export declare type UserInfoServiceType = {
    getClaims(token: any): Promise<any>;
};
export declare class UserInfoService implements UserInfoServiceType {
    private _settings;
    private _jsonService;
    private _metadataService;
    private _joseUtil;
    constructor(settings?: OidcClientSettings, JsonServiceCtor?: (settings?: any) => JsonService, MetadataServiceCtor?: (settings: OidcClientSettings) => MetadataServiceType, joseUtil?: {
        new (): {};
        parseJwt(jwt: any): {
            header: any;
            payload: any;
        };
        validateJwt(jwt: any, key: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
        validateJwtAttributes(jwt: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
        _validateJwt(jwt: any, key: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
        hashString(value: any, alg: any): any;
        hexToBase64Url(value: any): any;
    });
    getClaims(token: any): Promise<any>;
    _getClaimsFromJwt(req: any): any;
    _filterByAlg(keys: any, alg: any): any;
}
