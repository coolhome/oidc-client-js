export declare class CordovaPopupWindow {
    private _promise;
    private _resolve;
    private _reject;
    features: string;
    target: string;
    redirect_uri: string;
    private _exitCallbackEvent;
    private _loadStartCallbackEvent;
    private _popup;
    constructor(params: any);
    _isInAppBrowserInstalled(cordovaMetadata: any): boolean;
    navigate(params: any): void | Promise<unknown>;
    get promise(): Promise<unknown>;
    _loadStartCallback(event: any): void;
    _exitCallback(message: any): void;
    _success(data: any): void;
    _error(message: any): void;
    close(): void;
    _cleanup(): void;
}
