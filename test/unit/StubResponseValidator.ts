// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { ResponseValidatorType } from "../../src/ResponseValidator";
import { UserInfoService } from "../../src/UserInfoService";

export class StubResponseValidator implements ResponseValidatorType {
    signinState: any;
    signinResponse: any;
    signoutState: any;
    signoutResponse: any;

    validateSigninResponse(state, response) {

        this.signinState = state;
        this.signinResponse = response;

        return Promise.resolve(response);
    }

    validateSignoutResponse(state, response) {

        this.signoutState = state;
        this.signoutResponse = response;

        return Promise.resolve(response);
    }
}
