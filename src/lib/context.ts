import { AppForExtend, PagesProperty } from './app'

export class Context {
    $instance: AppForExtend
    $pages: PagesProperty
}

export const globalContext = new Context