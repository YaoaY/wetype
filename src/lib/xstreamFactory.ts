import xs, { Producer, Listener } from 'xstream'
import { wxLib } from '../../typings/wetype'

export const eventFactory = (srcObj, propertyName) => {
    const evProducer: Producer<wxLib.TapEvent> = {
        start: (listener: Listener<wxLib.TapEvent>) => {
            Object.defineProperty(
                srcObj,
                propertyName,
                {
                    value: (ev: wxLib.TapEvent) => listener.next(ev)
                }
            )
        },
        stop: () => { }
    }
    return xs.create(evProducer)
}