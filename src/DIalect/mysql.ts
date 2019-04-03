import util = require('util')
const events = require('events')

class MySQL extends FibjsDBDialect.Dialect {
    constructor () {
        super();
    }
}

util.inherits(MySQL, events.EventEmitter);