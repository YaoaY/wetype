import { $App, PagesProperty } from './app'

export class Context {
    $instance: $App
    $pages: PagesProperty
}

export const globalContext = new Context