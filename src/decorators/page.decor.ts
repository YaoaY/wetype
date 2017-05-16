import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'
import { inNode, extendClass } from '../lib/util'
import { Page } from '../lib/page'
import { globalContext } from '../lib/context'

export function PageDecor(pageDecoConfig: wxLib.PageDecoConfig) {
    return function(Constr: wxLib.PageConstructor) {
        if (inNode) {
            pageDecoConfig.components = pageDecoConfig.components || []
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name)
            Constr.config = pageDecoConfig.pageConfig
        } else {
            let config: any = {}
            // inherit Page to Constr mannually
            let newConstr = extendClass(Constr, Page)
            let page: Page = new newConstr
            globalContext.$instance.$pages[newConstr.name] = page
            config.$page = page

            config.onLoad = function (...args) {
                page.$name = newConstr.name
                page.init(this, globalContext.$instance)

                page.onLoad && page.onLoad.call(page, ...args)
            }

            config.onShow = function (...args) {
                page.onShow && page.onShow.call(page, ...args)
            }

            // initialize Page
            wt.Page(config)
        }
    }
}
