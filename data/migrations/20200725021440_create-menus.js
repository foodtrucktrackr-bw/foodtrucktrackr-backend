exports.up = function(knex) {
    return knex.schema
    .createTable('menus', table => {
        table.increments('menu_id');
        table.foreign('menu_truck').references('truck_id').inTable('trucks').notNullable();
        table.foreign('menu_promotion').references('promotion_id').inTable('promotions');
        table.string('menu_item_name').notNullable();
        table.string('menu_item_description');
        table.integer('menu_item_price').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('menus');
};
