import { State } from './State';
export declare class SignoutRequest {
    state: State;
    url: any;
    constructor({ url, id_token_hint, post_logout_redirect_uri, data, extraQueryParams, request_type }: {
        url: any;
        id_token_hint: any;
        post_logout_redirect_uri: any;
        data: any;
        extraQueryParams: any;
        request_type: any;
    });
}
