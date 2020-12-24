// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { UrlUtility } from './UrlUtility';

const OidcScope = "openid";

export class SigninResponse {
    error?: string;
    error_description?: string;
    error_uri?: string;
    code?: string;
    state?: string;
    id_token?: string;
    session_state?: string;
    access_token?: string;
    token_type?: string;
    scope?: string;
    
    profile: any;
    expires_at: number;

    constructor(url: string, delimiter = "#") {

        var values = UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    get expires_in() {
        if (this.expires_at) {
            let now = new Date().getTime() / 1000 | 0;
            return this.expires_at - now;
        }
        return undefined;
    }

    // todo: only accept number?
    set expires_in(value: number | string) {
        let expires_in = typeof value === 'number' ? value : parseInt(value);
        if (typeof expires_in === 'number' && expires_in > 0) {
            let now = new Date().getTime() / 1000 | 0;
            this.expires_at = now + expires_in;
        }
    }

    get expired() {
        let expires_in = this.expires_in;
        if (expires_in !== undefined) {
            return expires_in <= 0;
        }
        return undefined;
    }

    get scopes() {
        return (this.scope || "").split(" ");
    }

    get isOpenIdConnect() {
        return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
    }
}
