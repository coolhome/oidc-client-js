// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


let testing = false;
let request = null;

export class Global {

    static _testing() {
        testing = true;
    }

    static get location() {
        if (!testing) {
            return location;
        }
    }

    static get localStorage() {
        if (!testing && typeof window !== 'undefined') {
            return localStorage;
        }
    }

    static get sessionStorage() {
        if (!testing && typeof window !== 'undefined') {
            return global.sessionStorage;
        }
    }
}
