
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('student', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('email').unique().notNullable();
        table.integer('course').notNullable();
        table.integer('grade').notNullable();
        table.integer('source').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('student') 
};
