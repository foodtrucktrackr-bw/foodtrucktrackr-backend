exports.up = function(knex) {
    return knex.schema
    .createTable('menus', table => {
        table.increments();
        table.string('menu_truck')
                .references('id')
                .inTable('trucks')
                .notNullable();
        table.string('menu_item_name').notNullable();
        table.string('menu_item_description');
        table.integer('menu_item_price').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('menus');
};
