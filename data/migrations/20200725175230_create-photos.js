exports.up = function(knex) {
    return knex.schema
    .createTable('photos', table => {
        table.increments();
        table.string('photo_image_url')
                .notNullable();
        table.string('photo_description');
        table.string('photo_alt_text');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('photos')
};
