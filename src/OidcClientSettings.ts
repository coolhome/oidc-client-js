// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';
import { ClockService } from './ClockService';
import { WebStorageStateStore, WebStorageStateStoreType } from './WebStorageStateStore';
import { ResponseValidator, ResponseValidatorType } from './ResponseValidator';
import { MetadataService, MetadataServiceType } from './MetadataService';

const OidcMetadataUrlPath = '.well-known/openid-configuration';

const DefaultResponseType = "id_token";
const DefaultScope = "openid";
const DefaultStaleStateAge = 60 * 15; // seconds
const DefaultClockSkewInSeconds = 60 * 5;

export class OidcClientSettings {
    private _authority: any;
    private _metadataUrl: any;
    private _metadata: any;
    private _signingKeys: JsonWebKey[];
    private _client_id: any;
    private _client_secret: any;
    private _response_type: string;
    private _scope: string;
    private _redirect_uri: any;
    private _post_logout_redirect_uri: any;
    private _prompt: any;
    private _display: any;
    private _max_age: any;
    private _ui_locales: any;
    private _acr_values: any;
    private _resource: any;
    private _response_mode: any;
    private _filterProtocolClaims: boolean;
    private _loadUserInfo: boolean;
    private _staleStateAge: number;
    private _clockSkew: number;
    private _clockService: ClockService;
    private _userInfoJwtIssuer: string;
    private _stateStore: WebStorageStateStoreType;
    private _validator: ResponseValidatorType;
    private _metadataService: MetadataServiceType;
    private _extraQueryParams: {};
    private _extraTokenParams: {};

    constructor({
        // metadata related
        authority = undefined,
        metadataUrl = undefined,
        metadata = undefined,
        signingKeys = [] as JsonWebKey[],
        // client related
        client_id = undefined,
        client_secret = undefined,
        response_type = DefaultResponseType,
        scope = DefaultScope,
        redirect_uri = undefined,
        post_logout_redirect_uri = undefined,
        // optional protocol
        prompt = undefined,
        display = undefined,
        max_age = undefined,
        ui_locales = undefined,
        acr_values = undefined,
        resource = undefined,
        response_mode = undefined,
        // behavior flags
        filterProtocolClaims = true, loadUserInfo = true,
        staleStateAge = DefaultStaleStateAge,
        clockSkew = DefaultClockSkewInSeconds,
        clockService = new ClockService(),
        userInfoJwtIssuer = 'OP',
        // other behavior
        stateStore = new WebStorageStateStore(),
        ResponseValidatorCtor = (settings: OidcClientSettings) => new ResponseValidator(settings) as ResponseValidatorType,
        MetadataServiceCtor = (settings: OidcClientSettings) => new MetadataService(settings) as MetadataServiceType,
        // extra query params
        extraQueryParams = {},
        extraTokenParams = {}
    } = {
            stateStore: new WebStorageStateStore() as WebStorageStateStoreType,
            ResponseValidatorCtor: (settings: OidcClientSettings) => new ResponseValidator(settings) as ResponseValidatorType,
            MetadataServiceCtor: (settings: OidcClientSettings) => new MetadataService(settings) as MetadataServiceType,
        }) {

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._clockService = clockService;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = ResponseValidatorCtor(this);
        this._metadataService = MetadataServiceCtor(this);

        this._extraQueryParams = typeof extraQueryParams === 'object' ? extraQueryParams : {};
        this._extraTokenParams = typeof extraTokenParams === 'object' ? extraTokenParams : {};
    }

    // client config
    get client_id() {
        return this._client_id;
    }
    set client_id(value) {
        if (!this._client_id) {
            // one-time set only
            this._client_id = value;
        }
        else {
            Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.")
            throw new Error("client_id has already been assigned.")
        }
    }
    get client_secret() {
        return this._client_secret;
    }
    get response_type() {
        return this._response_type;
    }
    get scope() {
        return this._scope;
    }
    get redirect_uri() {
        return this._redirect_uri;
    }
    get post_logout_redirect_uri() {
        return this._post_logout_redirect_uri;
    }


    // optional protocol params
    get prompt() {
        return this._prompt;
    }
    get display() {
        return this._display;
    }
    get max_age() {
        return this._max_age;
    }
    get ui_locales() {
        return this._ui_locales;
    }
    get acr_values() {
        return this._acr_values;
    }
    get resource() {
        return this._resource;
    }
    get response_mode() {
        return this._response_mode;
    }


    // metadata
    get authority() {
        return this._authority;
    }
    set authority(value) {
        if (!this._authority) {
            // one-time set only
            this._authority = value;
        }
        else {
            Log.error("OidcClientSettings.set_authority: authority has already been assigned.")
            throw new Error("authority has already been assigned.")
        }
    }
    get metadataUrl() {
        if (!this._metadataUrl) {
            this._metadataUrl = this.authority;

            if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                    this._metadataUrl += '/';
                }
                this._metadataUrl += OidcMetadataUrlPath;
            }
        }

        return this._metadataUrl;
    }

    // settable/cachable metadata values
    get metadata() {
        return this._metadata;
    }
    set metadata(value) {
        this._metadata = value;
    }

    get signingKeys() {
        return this._signingKeys;
    }
    set signingKeys(value) {
        this._signingKeys = value;
    }

    // behavior flags
    get filterProtocolClaims() {
        return this._filterProtocolClaims;
    }
    get loadUserInfo() {
        return this._loadUserInfo;
    }
    get staleStateAge() {
        return this._staleStateAge;
    }
    get clockSkew() {
        return this._clockSkew;
    }
    get userInfoJwtIssuer() {
        return this._userInfoJwtIssuer;
    }

    get stateStore() {
        return this._stateStore;
    }
    get validator() {
        return this._validator;
    }
    get metadataService() {
        return this._metadataService;
    }

    // extra query params
    get extraQueryParams() {
        return this._extraQueryParams;
    }
    set extraQueryParams(value) {
        if (typeof value === 'object') {
            this._extraQueryParams = value;
        } else {
            this._extraQueryParams = {};
        }
    }

    // extra token params
    get extraTokenParams() {
        return this._extraTokenParams;
    }
    set extraTokenParams(value) {
        if (typeof value === 'object') {
            this._extraTokenParams = value;
        } else {
            this._extraTokenParams = {};
        }
    }

    // get the time
    getEpochTime() {
        return this._clockService.getEpochTime();
    }
}
