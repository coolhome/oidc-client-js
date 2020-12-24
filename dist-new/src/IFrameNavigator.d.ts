import { IFrameWindow } from './IFrameWindow';
export declare class IFrameNavigator {
    prepare(params: any): Promise<IFrameWindow>;
    callback(url: any): Promise<void>;
}
