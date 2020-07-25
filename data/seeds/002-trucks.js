
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_id: 1, truck_owner: 1, truck_menu: 1, truck_promotion: 1, truck_name: 'Burning Bluberries', truck_departure_time: '12:45', truck_rating: 4, truck_price_range: 2, truck_cuisine_type: 'Dessert', truck_description: 'Fancy desserts with alchol. What could be better?' },
        {truck_id: 1, truck_owner: 2, truck_menu: 2, truck_promotion: '', truck_name: 'French Fried', truck_departure_time: '20:45', truck_rating: 5, truck_price_range: 3, truck_cuisine_type: 'French Fusion', truck_description: 'The best of Franch, fried!' },
      ]);
    });
};
