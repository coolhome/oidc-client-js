// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';

export class ErrorResponse extends Error {
    error: any;
    error_description: any;
    error_uri: any;
    state: any;
    session_state: any;

    constructor({
        error = undefined,
        error_description = undefined,
        error_uri = undefined,
        state = undefined,
        session_state = undefined
    }={}
    ) {
         if (!error){
            Log.error("No error passed to ErrorResponse");
            throw new Error("error");
        }

        super(error_description || error);

        this.name = "ErrorResponse";

        this.error = error;
        this.error_description = error_description;
        this.error_uri = error_uri;

        this.state = state;
        this.session_state = session_state;
    }
}
