exports.up = function(knex) {
    return knex.schema
    .createTable('favorites', table => {
        table.increments('favorite_id');
        table.foreign('favorite_truck').references('truck_id').inTable('trucks');
        table.foreign('favorite_menu').references('menu_id').inTable('menus');
        table.foreign('favorite_user').references('user_id').inTable('users');
        table.foreign('favorite_photo').references('photo_id').inTable('photos');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('favorites');
};
