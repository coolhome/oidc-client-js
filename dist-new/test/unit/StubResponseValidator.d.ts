import { ResponseValidatorType } from "../../src/ResponseValidator";
export declare class StubResponseValidator implements ResponseValidatorType {
    signinState: any;
    signinResponse: any;
    signoutState: any;
    signoutResponse: any;
    validateSigninResponse(state: any, response: any): Promise<any>;
    validateSignoutResponse(state: any, response: any): Promise<any>;
}
