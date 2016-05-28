# oidc-client
oidc-client is a JavaScript library intended to run in browsers (and possibly Cordova style applications). It provides protocol support for OIDC and OAuth2, as well as management functions for user sessions and access tokens management.

There are two main classes that you might want to use depend on the level at with you use to use the library:

The `UserManager` class provides a higher level API for signing a user in, signing out, managing the user's claims returned from the OIDC provider, and managing an access token returned from the OIDC/OAuth2 provider. The `UserManager` is the primary feature of the library.

The `OidcClient` class provides the raw OIDC/OAuth2 protocol support for the authorization endpoint and the end session endpoint in the authorization server. It provides a bare-bones protocol implementation and is used by the `UserManager` class. Only use this class if you simply want protocol support without the additional management features of the `UserManager` class.

The remainder of this document will primarily focus on the `UserManager`.

## UserManager

### Configuration

The `UserManager` constructor requires a settings object as a parameter. The settings has these properties:

* Required Settings
 * authority (string): The URL of the OIDC/OAuth2 provider.
 * client_id (string): Your client application's identifier as registered with the OIDC/OAuth2 provider.
 * redirect_uri (string): The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider.
 * response_type (string, default: `'id_token'`): The type of response desired from the OIDC/OAuth2 provider.
 * scope (string, default: `'openid'`): The scope being requested from the OIDC/OAuth2 provider.

* Provider settings if CORS not supported
 The authority URL is used to make HTTP requests to discover more information about the server. If the server does not allow CORS on the metadata endpoint, then these additional settings can be provided (which can be found on the metadata endpoint of the provider):
 * issuer
 * authorization_endpoint
 * userinfo_endpoint
 * end_session_endpoint
 * jwks_uri
 * signingKeys (which is the `keys` property of the `jwks_uri` endpoint) 

* Optional Authorization Request Settings
 * prompt
 * display
 * max_age
 * ui_locales
 * login_hint
 * acr_values

* Other Optional Settings
 * clockSkew (number, default: `300`): The window of time (in seconds) to allow the current time to deviate when validating id_token's `iat`, `nbf`, and `exp` values.
 * loadUserInfo (boolean, default: `true`): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's `profile`.
 * filterProtocolClaims (boolean, default: `true`): Should OIDC protocol claims be removed from `profile`.
 * post_logout_redirect_uri (string): The OIDC/OAuth2 post-logout redirect URI.
 * popup_redirect_uri (string): The URL for the page containing the call to `signinPopupCallback` to handle the callback from the OIDC/OAuth2
 * popupWindowFeatures (string, default: `'location=no,toolbar=no,width=500,height=500,left=100,top=100'`): The `features` parameter to `window.open` for the popup signin window.
 * popupWindowTarget (string, default: `'_blank'`): The `target` parameter to `window.open` for the popup signin window.
 * silent_redirect_uri (string): The URL for the page containing the code handling the silent renew.
 * automaticSilentRenew (boolean, default: `false`): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration. The attempt is made as a result of the `accessTokenExpiring` event being raised.
 * accessTokenExpiringNotificationTime (number, default: `60`): The number of seconds before an access token is to expire to raise the `accessTokenExpiring` event.
 * userStore: (default: session storage): Storage object used to persist `User` for currently authenticated user. 

### Methods
* getUser: Returns promise to load the `User` object for the currently authenticated user. 
* removeUser: Returns promise to remove from any storage the currently authenticated user.
* signinRedirect: Returns promise to trigger a redirect of the current window to the authorization endpoint.
* signinRedirectCallback: Returns promise to process response from the authorization endpoint. The result of the promise is the authenticated `User`.
* signinSilent: Returns promise to trigger a silent request (via an iframe) to the authorization endpoint. The result of the promise is the authenticated `User`.
* signinSilentCallback: Returns promise to notify the parent window of response from the authorization endpoint.
* signinPopup: Returns promise to trigger a request (via a popup window) to the authorization endpoint. The result of the promise is the authenticated `User`.
* signinPopupCallback: Returns promise to notify the opening window of response from the authorization endpoint.
* signoutRedirect: Returns promise to trigger a redirect of the current window to the end session endpoint.
* signoutRedirectCallback: Returns promise to process response from the end session endpoint.

### Properties
* settings: Returns the settings used to configure the `UserManager`.
* events: Returns an object used to register for events raised by the `UserManager`. 
* metadataService: Returns an object used to access the metadata configuration of the OIDC provider.

### Events
* userLoaded: Raised when a user session has been established (or re-established).
* userUnloaded: Raised when a user session has been terminated.
* accessTokenExpiring: Raised prior to the access token expiring.
* accessTokenExpired: Raised after the access token has expired.
* silentRenewError: Raised when the automatic silent renew has failed.

## User

The `User` type is returned from the `UserManager`'s `getUser` API. It contains these properties:

* id_token: The id_token returned from the OIDC provider.
* profile: The claims represented by a combination of the `id_token` and the user info endpoint.
* session_state: The session state value returned from the OIDC provider. 
* access_token: The access token returned from the OIDC provider. 
* scope: The scope returned from the OIDC provider. 
* expires_at: The expires at returned from the OIDC provider. 
* expires_in: Calculated number of seconds the access token has remaining.
* expired: Calculated value indicating if the access token is expired.
* scopes: Array representing the parsed values from the `scope`.

