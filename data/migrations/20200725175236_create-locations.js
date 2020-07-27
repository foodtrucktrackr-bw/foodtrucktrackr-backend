exports.up = function(knex) {
    return knex.schema
    .createTable('locations', table => {
        table.increments();
        table.string('location_user')
                .references('id')
                .inTable('users');
        table.string('location_truck')
                .references('id')
                .inTable('users');
        table.string('location_latitude');
        table.string('location_longitude');
        table.string('location_address');
        table.string('location_city');
        table.string('location_state');
        table.integer('location_zip_code')
                .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('locations');
};
