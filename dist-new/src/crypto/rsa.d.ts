declare const AllowedSigningAlgs: string[];
declare const jws: {
    JWS: {
        parse: (token: any) => Error | {
            headerObj: any;
            payloadObj: any;
        };
        verify: (jwt: any, key: any, allowedSigningAlgs?: any[]) => any;
    };
};
declare const KeyUtil: {
    /**
     * Returns decoded keys in Hex format for use in crypto functions.
     * Supports modulus/exponent-style keys.
     *
     * @param {object} key the security key
     * @returns
     */
    getKey(key: any): {
        e: string;
        n: string;
    };
};
declare const X509: {
    getPublicKeyFromCertPEM: () => never;
};
declare const crypto: {
    Util: {
        hashString: (value: any, alg: any) => any;
    };
};
declare function hextob64u(s: any): any;
declare const b64tohex: (s: any) => string;
export { jws, KeyUtil, X509, crypto, hextob64u, b64tohex, AllowedSigningAlgs };
