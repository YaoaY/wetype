import { wxLib } from '../../typings/wetype'
import { wetype } from '../../typings/wetype.new'
import { wt } from '../lib/wx'
import { inNode, getProperties } from '../lib/util'
import { globalContext } from '../lib/context'

export function PageDecor(pageDecoConfig: wxLib.PageDecoConfig) {
    return function(Constr: wetype.PageConstructor) {
        if (inNode) {
            pageDecoConfig.components = pageDecoConfig.components || []
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name)
            Constr.config = pageDecoConfig.pageConfig
        } else {
            let page = new Constr
            let config: wetype.OriginalPageConfig = { $page: page }
            globalContext.$instance.$pages[Constr.name] = page
            config.data = pageDecoConfig.data

            config.onLoad = function (this: wetype.OriginalPageContext, ...args) {
                page.$name = Constr.name
                page.init(this, globalContext.$instance)

                page.onLoad && page.onLoad.call(page, ...args)
            }

            config.onShow = function (...args) {
                page.onShow && page.onShow.call(page, ...args)
            }
            // copy methods
            getProperties(page.methods).forEach(m => {
                config[m] = function (...args) {
                    page.methods && page.methods[m].call(page, ...args)
                }
            })

            // initialize Page
            wt.Page(config)
        }
    }
}
