
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('promotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('promotions').insert([
        {promotion_id: 1, promotion_truck: 1, promotion_menu: 1, promotion_name: 'Free Bluberry Pin', promotion_descrption: 'Buy your Flaming Blue now and get a free pin!', promotion_price: ''}
      ]);
    });
};
