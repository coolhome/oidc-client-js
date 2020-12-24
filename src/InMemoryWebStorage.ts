// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';

export class InMemoryWebStorage implements Storage {
    private _data: { [key: string]: string };

    constructor() {
        this._data = {};
    }

    [name: string]: any;

    clear(): void {
        throw new Error('Method not implemented.');
    }

    getItem(key: string): string | null {
        Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    }

    setItem(key: string, value: string) {
        Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    }

    removeItem(key: string) {
        Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    }

    get length() {
        return Object.getOwnPropertyNames(this._data).length;
    }

    key(index: number) {
        return Object.getOwnPropertyNames(this._data)[index];
    }
}
