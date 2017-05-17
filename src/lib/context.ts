import { wetype } from '../../typings/wetype.new'

export class Context implements wetype.GlobalContext {
    $instance: wetype.AppClass
    $pages: wetype.PagesProperty
}

export const globalContext = new Context