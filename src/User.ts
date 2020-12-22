// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';

export interface UserOptions {
    id_token?: any,
    session_state?: any,
    access_token?: any,
    refresh_token?: any,
    token_type?: any,
    scope?: any,
    profile?: any,
    expires_at?: any, 
    state?: any,
}

export class User {
    id_token: any;
    session_state: any;
    access_token: any;
    refresh_token: any;
    token_type: any;
    scope: any;
    profile: any;
    expires_at: any;
    state: any;
    constructor(options?: UserOptions) {
        this.id_token = options.id_token;
        this.session_state = options.session_state;
        this.access_token = options.access_token;
        this.refresh_token = options.refresh_token;
        this.token_type = options.token_type;
        this.scope = options.scope;
        this.profile = options.profile;
        this.expires_at = options.expires_at;
        this.state = options.state;
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

    toStorageString() {
        Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    }

    static fromStorageString(storageString) {
        Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    }
}
