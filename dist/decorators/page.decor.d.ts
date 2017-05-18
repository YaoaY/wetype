/**
 * this file exports Page decorator
 *
 * @author Kai Shao
 * @copyright open source
 */
import { wetype } from '../../typings/wetype.new';
import { PageForExtend, PageForExtendConstructor } from '../lib/page';
import { ComponentForExtendConstructor } from '../lib/component';
/**
 * config of decoration for page
 *
 * @export
 * @interface PageDecorConfig
 */
export interface PageDecorConfig {
    /**
     * array of components of the page
     *
     * @type {ComponentForExtendConstructor[]}
     * @memberof PageDecorConfig
     */
    components?: ComponentForExtendConstructor[];
    /**
     * native page config
     *
     * @type {wetype.PageConifg}
     * @memberof PageDecorConfig
     */
    pageConfig?: wetype.PageConifg;
    /**
     * initial page data
     *
     * @type {wetype.ObjectLiteral}
     * @memberof PageDecorConfig
     */
    data?: wetype.ObjectLiteral;
}
/**
 * config that is called by native Page()
 *
 * @export
 * @interface OriginalPageConfig
 * @extends {wetype.PageBaseEvents}
 */
export interface OriginalPageConfig extends wetype.PageBaseEvents {
    $page: PageForExtend;
    data?: wetype.ObjectLiteral;
    [handlers: string]: any;
}
/**
 * decoration for every single page
 *
 * @export
 * @param {PageDecorConfig} pageDecorConfig
 * @returns
 */
export declare function PageDecor(pageDecorConfig: PageDecorConfig): (PageConstructor: PageForExtendConstructor) => void;
