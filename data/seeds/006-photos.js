
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {photo_id: 1, photo_truck: '', photo_promotion: '', photo_menu_item: 1, photo_user: '', photo_image_url: 'https://images.unsplash.com/photo-1554495644-8ce87fe3e713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80', photo_description: 'Fresh Bluberries', photo_alt_text: 'photo of fresh bluberries'},
        {photo_id: 2, photo_truck: 2, photo_promotion: '', photo_menu_item: '', photo_user: '', photo_image_url: 'https://images.unsplash.com/photo-1570937943046-a2ca05de00ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80', photo_description: 'French Fried Truck', photo_alt_text: 'photo of food truck'},
        {photo_id: 3, photo_truck: 1, photo_promotion: '', photo_menu_item: '', photo_user: '', photo_image_url: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80', photo_description: 'Burning Blue Truck', photo_alt_text: 'photo of food truck'},
        {photo_id: 4, photo_truck: '', photo_promotion: '', photo_menu_item: 2, photo_user: '', photo_image_url: 'https://images.unsplash.com/photo-1570585809498-a38dca65b28c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80', photo_description: 'Fried Baguette', photo_alt_text: 'photo of fresh baked bread'}

      ]);

    });
};

