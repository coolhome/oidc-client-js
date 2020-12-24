import { Timer } from './Timer';
export declare class AccessTokenEvents {
    private _accessTokenExpiringNotificationTime;
    private _accessTokenExpiring;
    private _accessTokenExpired;
    constructor({ accessTokenExpiringNotificationTime, accessTokenExpiringTimer, accessTokenExpiredTimer }?: {
        accessTokenExpiringNotificationTime?: number;
        accessTokenExpiringTimer?: Timer;
        accessTokenExpiredTimer?: Timer;
    });
    load(container: any): void;
    unload(): void;
    addAccessTokenExpiring(cb: any): void;
    removeAccessTokenExpiring(cb: any): void;
    addAccessTokenExpired(cb: any): void;
    removeAccessTokenExpired(cb: any): void;
}
