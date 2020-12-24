export declare class RedirectNavigator {
    prepare(): Promise<this>;
    navigate(params: any): Promise<void>;
    get url(): string;
}
