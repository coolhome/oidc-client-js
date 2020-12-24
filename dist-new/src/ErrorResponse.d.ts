export declare class ErrorResponse extends Error {
    error: any;
    error_description: any;
    error_uri: any;
    state: any;
    session_state: any;
    constructor({ error, error_description, error_uri, state, session_state }?: {
        error?: any;
        error_description?: any;
        error_uri?: any;
        state?: any;
        session_state?: any;
    });
}
