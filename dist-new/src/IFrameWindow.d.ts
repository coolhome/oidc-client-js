export declare class IFrameWindow {
    private _promise;
    private _resolve;
    private _reject;
    private _boundMessageEvent;
    private _frame;
    private _timer;
    constructor(params: any);
    navigate(params: any): Promise<unknown>;
    get promise(): Promise<unknown>;
    _success(data: any): void;
    _error(message: any): void;
    close(): void;
    _cleanup(): void;
    _timeout(): void;
    _message(e: any): void;
    get _origin(): string;
    static notifyParent(url: any): void;
}
