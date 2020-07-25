exports.up = function(knex) {
    return knex.schema
    .createTable('photos', table => {
        table.increments('photo_id');
        table.foreign('photo_truck').references('truck_id').inTable('trucks');
        table.foreign('photo_promotion').references('promotion_id').inTable('promotions');
        table.foreign('photo_menu_item').references('menu_id').inTable('menus');
        table.foreign('photo_user').references('user_id').inTable('users');
        table.string('photo_image_url').notNullable();
        table.string('photo_description');
        table.string('photo_alt_text');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('photos')
};
