import { wetype } from '../../typings/wetype.new'
import { globalContext } from './context'

export class App {

    $pages: wetype.ObjectLiteral = {}

    init(AppConstr) {
        let config: wetype.OriginalAppContext = {}
        let appIns: wetype.AppClass = new AppConstr
        if (!globalContext.$instance) {
            appIns.init(globalContext)
            globalContext.$instance = appIns
        }
    }

}