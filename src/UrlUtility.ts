// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';
import { Global } from './Global';

export class UrlUtility {
    static addQueryParam(url: string, name: string, value: string | number | boolean) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    }

    static parseUrlFragment(url?: string, delimiter = "#", window: Window = global.window) {
        url = url ?? window.location.href;

        var idx = url.lastIndexOf(delimiter);
        if (idx >= 0) {
            url = url.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = url.indexOf('#');
            if (idx >= 0) {
                url = url.substr(0, idx);
            }
        }

        const params: {
            [parameter: string]: string
        } = {};
        const regex = /([^&=]+)=([^&]*)/g;
        let m: string[];

        var counter = 0;
        while (m = regex.exec(url)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2].replace(/\+/g, ' '));
            if (counter++ > 50) {
                Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", url);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        return params;
    }
}
