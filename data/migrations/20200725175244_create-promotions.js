exports.up = function(knex) {
    return knex.schema
    .createTable('promotions', table => {
        table.increments();
        table.string('promotion_name')
                .notNullable();
        table.string('promotion_description');
        table.integer('promotion_price');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('promotions');
};
