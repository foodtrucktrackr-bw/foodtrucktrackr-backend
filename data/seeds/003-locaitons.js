
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {location_id: 1, location_user: '', location_truck: 2, location_latitude: '', location_longitude: '', location_address: '1234 Main St.', location_city: 'Irvine', location_state: 'CA', location_zip_code: 92663},
        {location_id: 2, location_user: 1, location_truck: '', location_latitude: '', location_longitude: '', location_address: '1265', location_city: 'Green Bay', location_state: 'WI', location_zip_code: 54304},
        {location_id: 3, location_user: '', location_truck: '1', location_latitude: '30.2675324', location_longitude: '-97.7409393', location_address: '1100 Congress Ave.', location_city: 'Austin', location_state: 'TX', location_zip_code: 78701},
      ]);
    });
};
