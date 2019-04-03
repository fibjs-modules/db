const test = require('test')
test.setup()

const db = require('../')

describe('basic modules', () => {
    it('module property', () => {
        assert.property(db, 'Dialect')
    })
})

describe('knex integration', () => {
    describe('mysql', () => {
        it('connect', () => {
            var Knex = db.getKnex();

            let triggered = false;
            const mysql = Knex({ client: 'mysql' });

            const sql = mysql.select().from('books');

            console.log(
                'sql',
                Object.keys(sql),
                sql.toString()
            );
        })
    })
})

test.run(console.DEBUG)