/// <reference types="node" />
export declare class Global {
    static _testing(): void;
    static get location(): Location;
    static get localStorage(): Storage;
    static get sessionStorage(): Storage;
    static get timer(): {
        setInterval: (cb: any, duration: any) => NodeJS.Timeout;
        clearInterval: (handle: any) => void;
    };
}
