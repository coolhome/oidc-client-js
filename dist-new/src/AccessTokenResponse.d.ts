export interface AccessTokenResponse {
    id_token: string;
    access_token: string;
    token_type: string;
    expires_in?: string | number;
    refresh_token?: string;
    scope?: string;
    [key: string]: any;
}
