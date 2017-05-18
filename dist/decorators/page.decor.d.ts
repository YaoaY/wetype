/**
 * page.decor.ts
 * this file exports Page decorator
 *
 * @author Kai Shao
 * @copyright open source
 */
import { wetype } from '../../typings/wetype.new';
import { $Page, $PageConstructor } from '../lib/page';
import { $ComponentConstructor } from '../lib/component';
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
     * @type {$ComponentConstructor[]}
     * @memberof PageDecorConfig
     */
    components?: $ComponentConstructor[];
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
    $page: $Page;
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
export declare function PageDecor(pageDecorConfig: PageDecorConfig): (PageConstructor: $PageConstructor) => void;
