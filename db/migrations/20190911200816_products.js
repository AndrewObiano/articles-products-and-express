exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", table => {
    table.increments();
    table.string("name");
    table.integer("price");
    table.integer("inventory");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};
