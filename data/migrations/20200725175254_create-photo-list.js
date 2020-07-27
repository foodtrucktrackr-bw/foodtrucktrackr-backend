exports.up = function(knex) {
    return knex.schema
    .createTable('photo_list', table => {
        table.integer('pl_truck').references('id').inTable('trucks').unsigned();
        table.integer('pl_menu').references('id').inTable('menus').unsigned();
        table.integer('pl_user').references('id').inTable('users').unsigned();
        table.integer('pl_photo').references('id').inTable('photos').unsigned();
        table.primary(['pl_truck, pl_menu, pl_user, pl_photo']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('photo_list');
};
