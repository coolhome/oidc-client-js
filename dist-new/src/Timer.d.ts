/// <reference types="node" />
import { Event } from './Event';
export declare class Timer extends Event {
    private _nowFunc;
    private _timer;
    private _timerHandle;
    private _expiration;
    constructor(name: any, timer?: {
        setInterval: (cb: any, duration: any) => NodeJS.Timeout;
        clearInterval: (handle: any) => void;
    }, nowFunc?: any);
    get now(): number;
    init(rawDuration: number | string): void;
    get expiration(): number;
    cancel(): void;
    _callback(): void;
}
