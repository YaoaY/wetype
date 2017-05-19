import { $App, PagesProperty } from './app'
import { Stream } from 'xstream'

export class Context {
    $instance: $App
    $pages: PagesProperty
    $steams: Stream<any>[]
}

export const globalContext = new Context