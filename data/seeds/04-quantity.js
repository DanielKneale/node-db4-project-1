
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {amount: "1", ingredient_id: 1},
        {amount: "6", ingredient_id: 2},
        {amount: "6 tablespoons", ingredient_id: 3},
        {amount: "1/2 cup", ingredient_id: 4},
      ]);
    });
};
