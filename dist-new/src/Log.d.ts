export declare class Log {
    static get NONE(): number;
    static get ERROR(): number;
    static get WARN(): number;
    static get INFO(): number;
    static get DEBUG(): number;
    static reset(): void;
    static get level(): any;
    static set level(value: any);
    static get logger(): any;
    static set logger(value: any);
    static debug(...args: any[]): void;
    static info(...args: any[]): void;
    static warn(...args: any[]): void;
    static error(...args: any[]): void;
}
