/*
- Migration Order:
- Users
- Trucks
- Menus
- Photos
- Locations
- Promotions
- Intermediary Tables
-- Photo List
-- Favorites
-- User Locations
-- Truck Promotions
*/

exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments();
        table.string('user_first_name')
        table.string('user_last_name')
        table.string('username')
                .unique()
                .notNullable();
        table.string('user_email')
                .notNullable();
        table.string('user_password')
                .notNullable();
        table.string('user_role')
                .notNullable();
        table.integer('user_radius_size')
                .defaultTo('10');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users');
};

