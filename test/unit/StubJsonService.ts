// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { JsonService } from '../../src/JsonService';
import { Log } from '../../src/Log';

export class StubJsonService extends JsonService {
    url: any;
    token: any;
    result: any;

    constructor(
        additionalContentTypes = null,
        XMLHttpRequestCtor = () => new window.XMLHttpRequest,
        jwtHandler = null
    ) {
        super();
    }

    getJson(url, token) {
        Log.debug("StubJsonService.getJson", this.result);

        this.url = url;
        this.token = token;
        return this.result;
    }
}
