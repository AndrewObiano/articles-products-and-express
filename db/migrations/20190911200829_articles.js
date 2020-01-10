exports.up = function(knex, Promise) {
  return knex.schema.createTable("articles", table => {
    table.increments();
    table.string("title");
    table.text("description");
    table.string("author");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("articles");
};
