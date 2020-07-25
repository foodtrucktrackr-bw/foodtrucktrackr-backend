exports.up = function(knex) {
    return knex.schema
    .createTable('trucks', table => {
        table.integer('truck_id')
            .unsigned()
            .notNullable();
        table.foreign('truck_owner')
            .references('user_id')
            .inTable('users');
        table.foreign('truck_menu')
            .references('menu_id')
            .inTable('menus');
        table.foreign('truck_promotion')
            .references('promotion_id').
            inTable('promotions');
        table.string('truck_name')
            .notNullable();
        table.time('truck_departure_time');
        table.integer('truck_rating');
        table.integer('truck_price_range');
        table.string('truck_cuisine_type');
        table.string('truck_description');
        table.primary(['truck_id, truck_owner, truck_menu, truck_promotion']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trucks');
};
