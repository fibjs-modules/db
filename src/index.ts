export const Dialect = null

export function getKnex () {
    return require('./vbox').default;
}