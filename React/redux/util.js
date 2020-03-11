export const isPlainObject = (action) => {
    if (typeof action !== 'object' || !action) {
        return false
    }
    return Object.getPrototypeOf(action) === Object.prototype
}

export const getRandomString = (length) => {
    return Math.random().toString(36).substring(2, length).split('').join('.')
}