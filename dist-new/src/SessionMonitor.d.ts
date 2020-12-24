/// <reference types="node" />
import { CheckSessionIFrame } from './CheckSessionIFrame';
import { UserManager } from './UserManager';
export declare class SessionMonitor {
    private _userManager;
    private _CheckSessionIFrameCtor;
    private _timer;
    private _sub;
    private _sid;
    private _checkSessionIFrame;
    constructor(userManager: UserManager, CheckSessionIFrameCtor?: typeof CheckSessionIFrame, timer?: {
        setInterval: (cb: any, duration: any) => NodeJS.Timeout;
        clearInterval: (handle: any) => void;
    });
    get _settings(): import("./UserManagerSettings").UserManagerSettings;
    get _metadataService(): import("./MetadataService").MetadataServiceType;
    get _client_id(): any;
    get _checkSessionInterval(): number;
    get _stopCheckSessionOnError(): boolean;
    _start(user: any): void;
    _stop(): void;
    _callback(): void;
}
