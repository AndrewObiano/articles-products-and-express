exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          name: "Supreme x LV Leather Baseball Jacket (Red) ",
          price: "12000",
          inventory: "3",
          id: "1"
        },
        {
          name: "Nike MAG Back to the Future (2016)",
          price: "36254",
          inventory: "8",
          id: "2"
        },
        {
          name: "Rolex Daytona 116595RBOW",
          price: "157000",
          inventory: "4",
          id: "3"
        }
      ]);
    });
};
