// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';
import random from './random';
import { WebStorageStateStoreType } from './WebStorageStateStore';

export interface StateOptions {
    id?: any;
    data?: any;
    created?: number;
    request_type?: any;
}

export class State {
    protected _id: any;
    protected _data: any;
    protected _created: number;
    protected _request_type: any;

    constructor(options: StateOptions = {}) {
        this._id = options.id || random();
        this._data = options.data;

        if (typeof options.created === 'number' && options.created > 0) {
            this._created = options.created;
        }
        else {
            this._created = new Date().getTime() / 1000 | 0;
        }
        this._request_type = options.request_type;
    }

    get id() {
        return this._id;
    }
    get data() {
        return this._data;
    }
    get created() {
        return this._created;
    }
    get request_type() {
        return this._request_type;
    }

    toStorageString() {
        Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    }

    static fromStorageString(storageString) {
        Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    }

    static clearStaleState(storage: WebStorageStateStoreType, staleAge: number) {

        var cutoff = (new Date().getTime() / 1000 | 0) - staleAge;

        return storage.getAllKeys().then(keys => {
            Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                var p = storage.get(key).then(item => {
                    let remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item)

                            Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        }
                        catch (e) {
                            Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    }
                    else {
                        Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });

                promises.push(p);
            }

            Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    }
}
