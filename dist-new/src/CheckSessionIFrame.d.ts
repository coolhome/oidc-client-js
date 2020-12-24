export declare class CheckSessionIFrame {
    private _callback;
    private _client_id;
    private _url;
    private _interval;
    private _stopOnError;
    private _frame_origin;
    private _frame;
    private _boundMessageEvent;
    private _timer;
    private _session_state;
    constructor(callback: any, client_id: any, url: any, interval: any, stopOnError?: boolean);
    load(): Promise<unknown>;
    _message(e: any): void;
    start(session_state: any): void;
    stop(): void;
}
