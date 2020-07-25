exports.up = function(knex) {
    return knex.schema
    .createTable('promotions', table => {
        table.increments('promotion_id');
        table.foreign('promotion_truck').references('truck_id').notNullable();
        table.foreign('promotion_menu').references('menu_id');
        table.string('promotion_name').notNullable();
        table.string('promotion_description');
        table.integer('promotion_price');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('promotions');
};
