// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Log } from './Log';
import { OidcClientSettings, OidcClientSettingsOptions } from './OidcClientSettings';
import { RedirectNavigator } from './RedirectNavigator';
import { PopupNavigator } from './PopupNavigator';
import { IFrameNavigator } from './IFrameNavigator';
import { WebStorageStateStore, WebStorageStateStoreType } from './WebStorageStateStore';
import { Global } from './Global';
import { SigninRequest } from './SigninRequest';

const DefaultAccessTokenExpiringNotificationTime = 60;
const DefaultCheckSessionInterval = 2000;

export interface UserManagerSettingsOptions {
    popup_redirect_uri?: string,
    popup_post_logout_redirect_uri?: string,
    popupWindowFeatures?: string,
    popupWindowTarget?: string,
    silent_redirect_uri?: string,
    silentRequestTimeout?: number,
    automaticSilentRenew?: boolean,
    validateSubOnSilentRenew?: boolean,
    includeIdTokenInSilentRenew?: boolean,
    monitorSession?: boolean,
    monitorAnonymousSession?: boolean,
    checkSessionInterval?: number,
    stopCheckSessionOnError?: boolean,
    query_status_response_type?: string|boolean,
    revokeAccessTokenOnSignout?: boolean,
    accessTokenExpiringNotificationTime?: number,
    redirectNavigator?: RedirectNavigator,
    popupNavigator?: PopupNavigator,
    iframeNavigator?: IFrameNavigator,
    userStore?: WebStorageStateStoreType,
}

export class UserManagerSettings extends OidcClientSettings {
    private _popup_redirect_uri?: string;
    private _popup_post_logout_redirect_uri?: string;
    private _popupWindowFeatures?: string;
    private _popupWindowTarget?: string;
    private _silent_redirect_uri?: string;
    private _silentRequestTimeout?: number;
    private _automaticSilentRenew: boolean;
    private _validateSubOnSilentRenew: boolean;
    private _includeIdTokenInSilentRenew: boolean;
    private _accessTokenExpiringNotificationTime?: number;
    private _monitorSession: boolean;
    private _monitorAnonymousSession: boolean;
    private _checkSessionInterval: number;
    private _stopCheckSessionOnError: boolean;
    private _query_status_response_type?: string|boolean;
    private _revokeAccessTokenOnSignout: boolean;
    private _redirectNavigator: RedirectNavigator;
    private _popupNavigator: PopupNavigator;
    private _iframeNavigator: IFrameNavigator;
    private _userStore: WebStorageStateStore;

    constructor(options: UserManagerSettingsOptions & OidcClientSettingsOptions = {}) {
        options = {
            ...{
                automaticSilentRenew: false,
                validateSubOnSilentRenew: false,
                includeIdTokenInSilentRenew: true,
                monitorSession: true,
                monitorAnonymousSession: false,
                checkSessionInterval: DefaultCheckSessionInterval,
                stopCheckSessionOnError: true,
                revokeAccessTokenOnSignout: false,
                accessTokenExpiringNotificationTime: DefaultAccessTokenExpiringNotificationTime,
                redirectNavigator: new RedirectNavigator(),
                popupNavigator: new PopupNavigator(),
                iframeNavigator: new IFrameNavigator(),
                userStore: new WebStorageStateStore({ store: Global.sessionStorage })
            },
            ...options,
        };
        super(arguments[0]);

        this._popup_redirect_uri = options.popup_redirect_uri;
        this._popup_post_logout_redirect_uri = options.popup_post_logout_redirect_uri;
        this._popupWindowFeatures = options.popupWindowFeatures;
        this._popupWindowTarget = options.popupWindowTarget;

        this._silent_redirect_uri = options.silent_redirect_uri;
        this._silentRequestTimeout = options.silentRequestTimeout;
        this._automaticSilentRenew = options.automaticSilentRenew;
        this._validateSubOnSilentRenew = options.validateSubOnSilentRenew;
        this._includeIdTokenInSilentRenew = options.includeIdTokenInSilentRenew;
        this._accessTokenExpiringNotificationTime = options.accessTokenExpiringNotificationTime;

        this._monitorSession = options.monitorSession;
        this._monitorAnonymousSession = options.monitorAnonymousSession;
        this._checkSessionInterval = options.checkSessionInterval;
        this._stopCheckSessionOnError = options.stopCheckSessionOnError;
        if (options.query_status_response_type) {
            this._query_status_response_type = options.query_status_response_type;
        } 
        else if (arguments[0] && arguments[0].response_type) {
            this._query_status_response_type = SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        }
        else {
            this._query_status_response_type = "id_token";
        }
        this._revokeAccessTokenOnSignout = options.revokeAccessTokenOnSignout;

        this._redirectNavigator = options.redirectNavigator;
        this._popupNavigator = options.popupNavigator;
        this._iframeNavigator = options.iframeNavigator;

        this._userStore = options.userStore;
    }

    get popup_redirect_uri() {
        return this._popup_redirect_uri;
    }
    get popup_post_logout_redirect_uri() {
        return this._popup_post_logout_redirect_uri;
    }
    get popupWindowFeatures() {
        return this._popupWindowFeatures;
    }
    get popupWindowTarget() {
        return this._popupWindowTarget;
    }

    get silent_redirect_uri() {
        return this._silent_redirect_uri;
    }
     get silentRequestTimeout() {
        return this._silentRequestTimeout;
    }
    get automaticSilentRenew() {
        return this._automaticSilentRenew;
    }
    get validateSubOnSilentRenew() {
        return this._validateSubOnSilentRenew;
    }
    get includeIdTokenInSilentRenew() {
        return this._includeIdTokenInSilentRenew;
    }
    get accessTokenExpiringNotificationTime() {
        return this._accessTokenExpiringNotificationTime;
    }

    get monitorSession() {
        return this._monitorSession;
    }
    get monitorAnonymousSession() {
        return this._monitorAnonymousSession;
    }
    get checkSessionInterval() {
        return this._checkSessionInterval;
    }
    get stopCheckSessionOnError(){
        return this._stopCheckSessionOnError;
    }
    get query_status_response_type(){
        return this._query_status_response_type;
    }
    get revokeAccessTokenOnSignout() {
        return this._revokeAccessTokenOnSignout;
    }

    get redirectNavigator() {
        return this._redirectNavigator;
    }
    get popupNavigator() {
        return this._popupNavigator;
    }
    get iframeNavigator() {
        return this._iframeNavigator;
    }

    get userStore() {
        return this._userStore;
    }
}
