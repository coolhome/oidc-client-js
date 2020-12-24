import { AccessTokenEvents } from './AccessTokenEvents';
export declare class UserManagerEvents extends AccessTokenEvents {
    private _userLoaded;
    private _userUnloaded;
    private _silentRenewError;
    private _userSignedIn;
    private _userSignedOut;
    private _userSessionChanged;
    constructor(settings?: any);
    load(user: any, raiseEvent?: boolean): void;
    unload(): void;
    addUserLoaded(cb: any): void;
    removeUserLoaded(cb: any): void;
    addUserUnloaded(cb: any): void;
    removeUserUnloaded(cb: any): void;
    addSilentRenewError(cb: any): void;
    removeSilentRenewError(cb: any): void;
    _raiseSilentRenewError(e: any): void;
    addUserSignedIn(cb: any): void;
    removeUserSignedIn(cb: any): void;
    _raiseUserSignedIn(): void;
    addUserSignedOut(cb: any): void;
    removeUserSignedOut(cb: any): void;
    _raiseUserSignedOut(): void;
    addUserSessionChanged(cb: any): void;
    removeUserSessionChanged(cb: any): void;
    _raiseUserSessionChanged(): void;
}
