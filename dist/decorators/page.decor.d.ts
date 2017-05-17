import { wetype } from '../../typings/wetype.new';
import { PageForExtend, PageForExtendConstructor } from '../lib/page';
import { ComponentForExtendConstructor } from '../lib/component';
export interface PageDecorConfig {
    components?: ComponentForExtendConstructor[];
    pageConfig?: wetype.PageConifg;
    data?: wetype.ObjectLiteral;
}
export interface OriginalPageConfig extends wetype.PageBaseEvents {
    $page: PageForExtend;
    data?: wetype.ObjectLiteral;
    [handlers: string]: any;
}
export declare function PageDecor(pageDecorConfig: PageDecorConfig): (Constr: PageForExtendConstructor) => void;
