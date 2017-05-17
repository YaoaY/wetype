import { wetype } from '../../typings/wetype.new'

export class AppForExtend implements wetype.AppClass {

    $pages: wetype.PagesProperty = {}
    $wxapp: wetype.OriginalAppContext

    init(globalContext) {
        // let config: wetype.OriginalAppContext = {}
        // let appIns: wetype.AppClass = new AppConstr
        // if (!globalContext.$instance) {
        //     appIns.init(globalContext)
        //     globalContext.$instance = appIns
        // }
    }

}