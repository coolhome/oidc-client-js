import { MetadataServiceType } from './MetadataService';
import { UserInfoServiceType } from './UserInfoService';
import { TokenClient } from './TokenClient';
import { OidcClientSettings } from './OidcClientSettings';
export interface ResponseValidatorType {
    validateSigninResponse(state: any, response: any): Promise<any>;
    validateSignoutResponse(state: any, response: any): Promise<any>;
}
export declare class ResponseValidator implements ResponseValidatorType {
    _settings: OidcClientSettings;
    private _metadataService;
    private _userInfoService;
    private _joseUtil;
    private _tokenClient;
    constructor(settings?: OidcClientSettings, MetadataServiceCtor?: (settings: OidcClientSettings) => MetadataServiceType, UserInfoServiceCtor?: (settings: OidcClientSettings) => UserInfoServiceType, joseUtil?: {
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
    }, TokenClientCtor?: typeof TokenClient);
    validateSigninResponse(state: any, response: any): Promise<any>;
    validateSignoutResponse(state: any, response: any): Promise<any>;
    _processSigninParams(state: any, response: any): Promise<any>;
    _processClaims(state: any, response: any): Promise<any>;
    _mergeClaims(claims1: any, claims2: any): any;
    _filterProtocolClaims(claims: any): any;
    _validateTokens(state: any, response: any): Promise<any>;
    _processCode(state: any, response: any): Promise<any>;
    _validateIdTokenAttributes(state: any, response: any): Promise<any>;
    _validateIdTokenAndAccessToken(state: any, response: any): Promise<any>;
    _getSigningKeyForJwt(jwt: any): Promise<any>;
    _getSigningKeyForJwtWithSingleRetry(jwt: any): Promise<any>;
    _validateIdToken(state: any, response: any): Promise<any>;
    _filterByAlg(keys: any, alg: any): any;
    _validateAccessToken(response: any): Promise<any>;
}
