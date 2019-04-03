/// <reference types="fibjs" />

declare namespace FibjsDBDialect {
    class Dialect extends Class_EventEmitter {
    }
}

declare module "@fibjs/db" {
    const DB: any
    export = DB
}