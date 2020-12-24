export declare class PopupWindow {
    private _promise;
    private _resolve;
    private _reject;
    private _popup;
    private _checkForPopupClosedTimer;
    private _id;
    constructor(params: any);
    get promise(): Promise<unknown>;
    navigate(params: any): Promise<unknown>;
    _success(data: any): void;
    _error(message: any): void;
    close(): void;
    _cleanup(keepOpen: any): void;
    _checkForPopupClosed(): void;
    _callback(url: any, keepOpen: any): void;
    static notifyOpener(url: any, keepOpen: any, delimiter: any): void;
}
