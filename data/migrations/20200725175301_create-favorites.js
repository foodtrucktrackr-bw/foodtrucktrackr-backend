exports.up = function(knex) {
    return knex.schema
    .createTable('favorites', table => {
        table.integer('favorite_truck').references('id').inTable('trucks').unsigned();
        table.integer('favorite_menu_item').references('menu_item_id').inTable('menus').unsigned();
        table.integer('favorite_user').references('id').inTable('users').unsigned();
        table.primary(['favorite_truck, favorite_menu_item, favorite_user']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('favorites');
};
