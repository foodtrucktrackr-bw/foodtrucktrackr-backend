
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {favorite_id: 1, favorite_truck: 1, favorite_menu: '' , favorite_user: 4, favorite_photo: '' }
      ]);
    });
};
