import { OidcClientSettings, OidcClientSettingsOptions } from './OidcClientSettings';
import { RedirectNavigator } from './RedirectNavigator';
import { PopupNavigator } from './PopupNavigator';
import { IFrameNavigator } from './IFrameNavigator';
import { WebStorageStateStoreType } from './WebStorageStateStore';
export interface UserManagerSettingsOptions {
    popup_redirect_uri?: string;
    popup_post_logout_redirect_uri?: string;
    popupWindowFeatures?: string;
    popupWindowTarget?: string;
    silent_redirect_uri?: string;
    silentRequestTimeout?: number;
    automaticSilentRenew?: boolean;
    validateSubOnSilentRenew?: boolean;
    includeIdTokenInSilentRenew?: boolean;
    monitorSession?: boolean;
    monitorAnonymousSession?: boolean;
    checkSessionInterval?: number;
    stopCheckSessionOnError?: boolean;
    query_status_response_type?: string | boolean;
    revokeAccessTokenOnSignout?: boolean;
    accessTokenExpiringNotificationTime?: number;
    redirectNavigator?: RedirectNavigator;
    popupNavigator?: PopupNavigator;
    iframeNavigator?: IFrameNavigator;
    userStore?: WebStorageStateStoreType;
}
export declare class UserManagerSettings extends OidcClientSettings {
    private _popup_redirect_uri?;
    private _popup_post_logout_redirect_uri?;
    private _popupWindowFeatures?;
    private _popupWindowTarget?;
    private _silent_redirect_uri?;
    private _silentRequestTimeout?;
    private _automaticSilentRenew;
    private _validateSubOnSilentRenew;
    private _includeIdTokenInSilentRenew;
    private _accessTokenExpiringNotificationTime?;
    private _monitorSession;
    private _monitorAnonymousSession;
    private _checkSessionInterval;
    private _stopCheckSessionOnError;
    private _query_status_response_type?;
    private _revokeAccessTokenOnSignout;
    private _redirectNavigator;
    private _popupNavigator;
    private _iframeNavigator;
    private _userStore;
    constructor(options?: UserManagerSettingsOptions & OidcClientSettingsOptions);
    get popup_redirect_uri(): string;
    get popup_post_logout_redirect_uri(): string;
    get popupWindowFeatures(): string;
    get popupWindowTarget(): string;
    get silent_redirect_uri(): string;
    get silentRequestTimeout(): number;
    get automaticSilentRenew(): boolean;
    get validateSubOnSilentRenew(): boolean;
    get includeIdTokenInSilentRenew(): boolean;
    get accessTokenExpiringNotificationTime(): number;
    get monitorSession(): boolean;
    get monitorAnonymousSession(): boolean;
    get checkSessionInterval(): number;
    get stopCheckSessionOnError(): boolean;
    get query_status_response_type(): string | boolean;
    get revokeAccessTokenOnSignout(): boolean;
    get redirectNavigator(): RedirectNavigator;
    get popupNavigator(): PopupNavigator;
    get iframeNavigator(): IFrameNavigator;
    get userStore(): WebStorageStateStoreType;
}
