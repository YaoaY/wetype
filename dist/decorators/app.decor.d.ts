/**
 * app.decor.ts
 *
 * @author Kai Shao
 * @copyright open source
 */
import { wxLib } from '../../typings/wetype';
import { wetype } from '../../typings/wetype.new';
import { $AppConstructor, $App } from '../lib/app';
/**
 * config for decoration for app
 *
 * @export
 * @interface OriginalAppConfig
 * @extends {wetype.AppBaseEvents}
 */
export interface OriginalAppConfig extends wetype.AppBaseEvents {
    $app: $App;
}
/**
 * decoration for App class
 *
 * @export
 * @param {wxLib.AppConfig} appConfig
 * @returns void
 */
export declare function AppDecor(appConfig: wxLib.AppConfig): (AppConstructor: $AppConstructor) => void;
