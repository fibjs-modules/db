import vm = require('vm')
import path = require('path')

const __root = path.resolve(__dirname, '../../')

const vbox = new vm.SandBox({
    'fs': require('fs'),
    'path': require('path'),
    'os': require('os'),
    'url': require('url'),
    'tty': require('tty'),
    'util': require('util'),
    'events': require('events'),
    'assert': require('assert'),
    'crypto': require('crypto')
});

vbox.add({
    // uuid is not builtin-module of nodejs but in fibjs, use community version
    'uuid': vbox.require('./node_modules/uuid', __root)
});

export default vbox.require('knex', __dirname)