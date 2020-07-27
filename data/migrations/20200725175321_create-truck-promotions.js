exports.up = function(knex) {
    return knex.schema
    .createTable('truck_promotions', table => {
        table.integer('tp_truck').references('id').inTable('trucks').unsigned();
        table.integer('tp_promotion').references('id').inTable('promotions').unsigned();
        table.primary(['tp_truck, tp_user']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('truck_promotions');
};
