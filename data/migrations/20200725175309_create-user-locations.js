exports.up = function(knex) {
    return knex.schema
    .createTable('user_locations', table => {
        table.integer('ul_truck').references('id').inTable('trucks').unsigned();
        table.integer('ul_user').references('id').inTable('users').unsigned();
        table.primary(['ul_truck, ul_user']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user_locations');
};
