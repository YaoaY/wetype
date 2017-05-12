export function getRandom () {
    return (new Date().getTime() + '').slice(-6)
}