const cleaner = require('knex-cleaner');

const options = {
  mode: 'truncate',
  ignoreTables: ['knex_migrations', 'knexmigration']
}

exports.seed = function(knex) {
  return cleaner.clean(knex, options)
};
