/**
 * app.decor.ts
 *
 * @author Kai Shao
 * @copyright open source
 */
import { wxLib } from '../../typings/wetype';
import { wetype } from '../../typings/wetype.new';
import { AppForExtendConstructor, AppForExtend } from '../lib/app';
/**
 * config for decoration for app
 *
 * @export
 * @interface OriginalAppConfig
 * @extends {wetype.AppBaseEvents}
 */
export interface OriginalAppConfig extends wetype.AppBaseEvents {
    $app: AppForExtend;
}
/**
 * decoration for App class
 *
 * @export
 * @param {wxLib.AppConfig} appConfig
 * @returns void
 */
export declare function AppDecor(appConfig: wxLib.AppConfig): (AppConstructor: AppForExtendConstructor) => void;
