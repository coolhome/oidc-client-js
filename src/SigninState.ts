// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';
import { State, StateOptions } from './State';
import { JoseUtil } from './JoseUtil';
import random from './random';

type SigninStateOptions = StateOptions & {
    nonce?: any,
    authority?: any,
    client_id?: any,
    redirect_uri?: any,
    code_verifier?: any,
    response_mode?: any,
    client_secret?: any,
    scope?: any,
    extraTokenParams?: any,
    skipUserInfo?: any,
}

export class SigninState extends State {
    protected _nonce: any;
    protected _code_verifier: any;
    protected _code_challenge: any;
    protected _redirect_uri: any;
    protected _authority: any;
    protected _client_id: any;
    protected _response_mode: any;
    protected _client_secret: any;
    protected _scope: any;
    protected _extraTokenParams: any;
    protected _skipUserInfo: any;

    constructor(options: SigninStateOptions) {
        super(options);

        if (options.nonce === true) {
            this._nonce = random();
        }
        else if (options.nonce) {
            this._nonce = options.nonce;
        }

        if (options.code_verifier === true) {
            // random() produces 32 length
            this._code_verifier = random() + random() + random();
        }
        else if (options.code_verifier) {
            this._code_verifier = options.code_verifier;
        }

        if (this.code_verifier) {
            let hash = JoseUtil.hashString(this.code_verifier, "SHA256");
            this._code_challenge = JoseUtil.hexToBase64Url(hash);
        }

        this._redirect_uri = options.redirect_uri;
        this._authority = options.authority;
        this._client_id = options.client_id;
        this._response_mode = options.response_mode;
        this._client_secret = options.client_secret;
        this._scope = options.scope;
        this._extraTokenParams = options.extraTokenParams;
        this._skipUserInfo = options.skipUserInfo;
    }

    get nonce() {
        return this._nonce;
    }
    get authority() {
        return this._authority;
    }
    get client_id() {
        return this._client_id;
    }
    get redirect_uri() {
        return this._redirect_uri;
    }
    get code_verifier() {
        return this._code_verifier;
    }
    get code_challenge() {
        return this._code_challenge;
    }
    get response_mode() {
        return this._response_mode;
    }
    get client_secret() {
        return this._client_secret;
    }
    get scope() {
        return this._scope;
    }
    get extraTokenParams() {
        return this._extraTokenParams;
    }
    get skipUserInfo() {
        return this._skipUserInfo;
    }

    toStorageString() {
        Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode,
            client_secret: this.client_secret,
            scope: this.scope,
            extraTokenParams: this.extraTokenParams,
            skipUserInfo: this.skipUserInfo
        });
    }

    static fromStorageString(storageString) {
        Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    }
}