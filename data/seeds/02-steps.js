
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_instructions:"Preheat oven to 375 degrees.", recipe_id: 1},
        {step_number: 2, step_instructions:"Slice loaf lengthwise and lay open-faced.", recipe_id: 1},
        {step_number: 3, step_instructions:"in a medium bowl, combine butter, garlic and parsley.", recipe_id: 1},
        {step_number: 4, step_instructions:"Spread in a thick, even layer over both halves of loaf.", recipe_id: 1},
        {step_number: 5, step_instructions:"Place both halves on a baking sheet and bake for 15 minutes or until golden brown.", recipe_id: 1},
        {step_number: 6, step_instructions:"Allow to cool slightly before slicing and serving.", recipe_id: 1},
      ]);
    });
};
