
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, user_first_name: 'John', user_last_name: 'Smith', username: 'jonny', password: 'abc123', user_role: 'Owner', user_radius_size: ''},
        {user_id: 2, user_first_name: 'Sue', user_last_name: 'Perkins', username: 'suzy', password: 'abc123', user_role: 'Owner', user_radius_size: ''},
        {user_id: 3, user_first_name: 'Rory', user_last_name: 'Trojan', username: 'iwait', password: 'abc123', user_role: 'Diner', user_radius_size: '75'},
{user_id: 4, user_first_name: 'Amy', user_last_name: 'Goober', username: 'goobs', password: 'abc123', user_role: 'Diner', user_radius_size: '7'},
      ]);
    });
};
