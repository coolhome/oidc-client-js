// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
export class StubMetadataService {
    resetSigningKeys() { }
    getMetadata() {
        return Promise.resolve(this.getMetadataResult);
    }
    getIssuer() {
        return Promise.resolve(this.getIssuerResult);
    }
    getAuthorizationEndpoint() {
        return Promise.resolve(this.getAuthorizationEndpointResult);
    }
    getEndSessionEndpoint() {
        return Promise.resolve(this.getEndSessionEndpointResult);
    }
    getUserInfoEndpoint() {
        return Promise.resolve(this.userInfoEndpointResult);
    }
    getSigningKeys() {
        return Promise.resolve(this.getSigningKeysResult);
    }
    getTokenEndpoint(optional) {
        return this.getTokenEndpointResult;
    }
    getCheckSessionIframe() {
        return this.getCheckSessionIframeResult;
    }
    getRevocationEndpoint() {
        return this.getRevocationEndpointResult;
    }
    getKeysEndpoint() {
        return this.getKeysEndpointResult;
    }
    _getMetadataProperty(name, optional) {
        return this._getMetadataPropertyResult;
    }
    get metadataUrl() {
        return this.metadataUrlResult;
    }
}
//# sourceMappingURL=StubMetadataService.js.map