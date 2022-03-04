
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "loaf Italian bread", step_id: 1},
        {ingredient_name: "large clove(s) garlic, finely minced", step_id: 1},
        {ingredient_name: "salted butter, softened", step_id: 1},
        {ingredient_name: "Italian parsley, chopped", step_id: 1},
      ]);
    });
};