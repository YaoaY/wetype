import { wxLib } from '../../typings/wetype';
import { wetype } from '../../typings/wetype.new';
import { AppForExtendConstructor, AppForExtend } from '../lib/app';
export interface OriginalAppConfig extends wetype.AppBaseEvents {
    $app: AppForExtend;
}
export declare function AppDecor(appConfig: wxLib.AppConfig): (Constr: AppForExtendConstructor) => void;
