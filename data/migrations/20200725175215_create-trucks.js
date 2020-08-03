exports.up = function(knex) {
    return knex.schema
    .createTable('trucks', table => {
        table.increments();
        table.string('truck_owner')
                .references('id')
                .inTable('users');
        table.string('truck_name')
                .notNullable();
        table.time('truck_departure_time');
        table.integer('truck_rating');
        table.integer('truck_price_range');
        table.string('truck_cuisine_type');
        table.string('truck_description');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trucks');
};
