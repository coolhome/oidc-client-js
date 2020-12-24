import { PopupWindow } from './PopupWindow';
export declare class PopupNavigator {
    prepare(params: any): Promise<PopupWindow>;
    callback(url: any, keepOpen: any, delimiter: any): Promise<void>;
}
