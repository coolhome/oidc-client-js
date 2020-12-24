export declare const JoseUtil: {
    new (): {};
    parseJwt(jwt: any): {
        header: any;
        payload: any;
    };
    validateJwt(jwt: any, key: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
    validateJwtAttributes(jwt: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
    _validateJwt(jwt: any, key: any, issuer: any, audience: any, clockSkew: any, now: any, timeInsensitive: any): Promise<any>;
    hashString(value: any, alg: any): any;
    hexToBase64Url(value: any): any;
};
