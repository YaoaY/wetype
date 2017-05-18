import { wetype } from '../../typings/wetype.new'
import { $Page } from './page'

export interface PagesProperty {
    [name: string]: $Page
}

export interface $AppConstructor {
    new (): $App
}

export class $App {

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