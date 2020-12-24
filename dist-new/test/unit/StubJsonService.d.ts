import { JsonService } from '../../src/JsonService';
export declare class StubJsonService extends JsonService {
    url: any;
    token: any;
    result: any;
    constructor(additionalContentTypes?: any, XMLHttpRequestCtor?: () => XMLHttpRequest, jwtHandler?: any);
    getJson(url: any, token: any): any;
}
