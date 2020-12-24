import { MetadataServiceType } from "../../src/MetadataService";
export declare class StubMetadataService implements MetadataServiceType {
    getMetadataResult: any;
    getIssuerResult: any;
    getAuthorizationEndpointResult: any;
    getEndSessionEndpointResult: any;
    userInfoEndpointResult: any;
    getSigningKeysResult: any;
    getTokenEndpointResult: any;
    getCheckSessionIframeResult: any;
    getRevocationEndpointResult: Promise<any>;
    getKeysEndpointResult: Promise<any>;
    _getMetadataPropertyResult: Promise<any>;
    metadataUrlResult: any;
    resetSigningKeys(): void;
    getMetadata(): any;
    getIssuer(): any;
    getAuthorizationEndpoint(): any;
    getEndSessionEndpoint(): any;
    getUserInfoEndpoint(): any;
    getSigningKeys(): any;
    getTokenEndpoint(optional?: any): Promise<any>;
    getCheckSessionIframe(): Promise<any>;
    getRevocationEndpoint(): Promise<any>;
    getKeysEndpoint(): Promise<any>;
    _getMetadataProperty(name: string, optional?: boolean): Promise<any>;
    get metadataUrl(): any;
}
