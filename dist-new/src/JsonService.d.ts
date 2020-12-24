export declare class JsonService {
    private _contentTypes;
    private _jwtHandler;
    private _XMLHttpRequest;
    constructor(additionalContentTypes?: any, XMLHttpRequestCtor?: () => XMLHttpRequest, jwtHandler?: any);
    getJson(url: any, token?: any): Promise<any>;
    postForm(url: any, payload: any): Promise<unknown>;
}
