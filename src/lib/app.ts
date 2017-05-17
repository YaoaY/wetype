import { wetype } from '../../typings/wetype.new'
import { PageForExtend } from './page'

export interface PagesProperty {
    [name: string]: PageForExtend
}

export interface AppForExtendConstructor {
    new (): AppForExtend
}

export class AppForExtend {

    $pages: PagesProperty = {}
    $wxapp: wetype.OriginalAppContext

    init(globalContext) {
        // let config: wetype.OriginalAppContext = {}
        // let appIns: wetype.AppClass = new AppConstr
        // if (!globalContext.$instance) {
        //     appIns.init(globalContext)
        //     globalContext.$instance = appIns
        // }
    }

    onLaunch () {

    }

    onShow() {

    }

}