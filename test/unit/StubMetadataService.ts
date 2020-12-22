// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { MetadataServiceType } from "../../src/MetadataService";

export class StubMetadataService implements MetadataServiceType {
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

    resetSigningKeys() { }
    getMetadata() {
        return this.getMetadataResult;
    }
    getIssuer() {
        return this.getIssuerResult;
    }
    getAuthorizationEndpoint() {
        return this.getAuthorizationEndpointResult;
    }
    getEndSessionEndpoint() {
        return this.getEndSessionEndpointResult;
    }
    getUserInfoEndpoint() {
        return this.userInfoEndpointResult;
    }
    getSigningKeys() {
        return this.getSigningKeysResult;
    }

    getTokenEndpoint(optional?: any): Promise<any> {
        return this.getTokenEndpointResult;
    }

    getCheckSessionIframe(): Promise<any> {
        return this.getCheckSessionIframeResult;
    }

    getRevocationEndpoint(): Promise<any> {
        return this.getRevocationEndpointResult;
    }

    getKeysEndpoint(): Promise<any> {
        return this.getKeysEndpointResult;
    }

    _getMetadataProperty(name: string, optional?: boolean): Promise<any> {
        return this._getMetadataPropertyResult;
    }
    get metadataUrl(): any {
        return this.metadataUrlResult;
    }
}
