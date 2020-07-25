
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menus').del()
    .then(function () {
      // Inserts seed entries
      return knex('menus').insert([
        {menu_id: 1, menu_truck: 1, menu_promotion: '', menu_item_name: 'Blue Vodka', menu_item_description: 'Top shelf bluberries, flash fired with equally top shelf vodka.', menu_item_price: 15},
        {menu_id: 2, menu_truck: 2, menu_promotion: '', menu_item_name: 'Baguette De Crisp', menu_item_description: 'Soft on the inside, fried golden. Handmade orange butter.', menu_item_price: 20 }
      ]);
    });
};
