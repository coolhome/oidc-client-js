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

export interface OidcClientSettingsOptions {
    // metadata related
    authority?: string,
    metadataUrl?: string,
    metadata?: string,
    signingKeys?: JsonWebKey[],

    // client related
    client_id?: string,
    client_secret?: string,
    response_type?: string,
    scope?: string,
    redirect_uri?: string,
    post_logout_redirect_uri?: string,
    // optional protocol
    prompt?: any,
    display?: any,
    max_age?: any,
    ui_locales?: any,
    acr_values?: any,
    resource?: any,
    response_mode?: any,
    // behavior flags
    filterProtocolClaims?: boolean,
    loadUserInfo?: boolean,
    staleStateAge?: number,
    clockSkew?: number,
    clockService?: ClockService,
    userInfoJwtIssuer?: any,
    // other behavior
    stateStore?: WebStorageStateStoreType,
    ResponseValidatorCtor?: (settings: OidcClientSettings) => ResponseValidatorType,
    MetadataServiceCtor?: (settings: OidcClientSettings) => MetadataServiceType,
    // extra query params
    extraQueryParams?: any,
    extraTokenParams?: any,
}

export class OidcClientSettings {
    protected _authority: string;
    protected _metadataUrl: string;
    protected _metadata: string;
    protected _signingKeys: JsonWebKey[];
    protected _client_id: any;
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
    public _filterProtocolClaims: boolean;
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

    constructor(options: OidcClientSettingsOptions = {}) {
        options = {
            ...{
                // metadata related
                signingKeys: [],
                response_type: DefaultResponseType,
                scope: DefaultScope,
                // behavior flags
                filterProtocolClaims: true,
                loadUserInfo: true,
                staleStateAge: DefaultStaleStateAge,
                clockSkew: DefaultClockSkewInSeconds,
                clockService: new ClockService(),
                userInfoJwtIssuer: 'OP',
                // other behavior
                stateStore: new WebStorageStateStore(),
                ResponseValidatorCtor: (settings: OidcClientSettings) => new ResponseValidator(settings) as ResponseValidatorType,
                MetadataServiceCtor: (settings: OidcClientSettings) => new MetadataService(settings) as MetadataServiceType,
                // extra query params
                extraQueryParams: {},
                extraTokenParams: {}
            },
            ...options
        }

        this._authority = options.authority;
        this._metadataUrl = options.metadataUrl;
        this._metadata = options.metadata;
        this._signingKeys = options.signingKeys;

        this._client_id = options.client_id;
        this._client_secret = options.client_secret;
        this._response_type = options.response_type;
        this._scope = options.scope;
        this._redirect_uri = options.redirect_uri;
        this._post_logout_redirect_uri = options.post_logout_redirect_uri;

        this._prompt = options.prompt;
        this._display = options.display;
        this._max_age = options.max_age;
        this._ui_locales = options.ui_locales;
        this._acr_values = options.acr_values;
        this._resource = options.resource;
        this._response_mode = options.response_mode;

        this._filterProtocolClaims = !!options.filterProtocolClaims;
        this._loadUserInfo = !!options.loadUserInfo;
        this._staleStateAge = options.staleStateAge;
        this._clockSkew = options.clockSkew;
        this._clockService = options.clockService;
        this._userInfoJwtIssuer = options.userInfoJwtIssuer;

        this._stateStore = options.stateStore;
        this._validator = options.ResponseValidatorCtor(this);
        this._metadataService = options.MetadataServiceCtor(this);

        this._extraQueryParams = typeof options.extraQueryParams === 'object' ? options.extraQueryParams : {};
        this._extraTokenParams = typeof options.extraTokenParams === 'object' ? options.extraTokenParams : {};
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
