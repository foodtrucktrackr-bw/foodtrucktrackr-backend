exports.up = function(knex) {
    return knex.schema
    .createTable('locations', table => {
        table.increments('location_id');
        table.foreign('location_user').references('user_id').inTable('users');
        table.foreign('location_truck').references('truck_id').inTable('users');
        table.string('location_latitude');
        table.string('location_longitude');
        table.string('location_address');
        table.string('location_city');
        table.string('location_state');
        table.integer('location_zip_code').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('locations');
};
