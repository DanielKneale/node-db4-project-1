const db = require('../data/db-config.js');

async function getRecipeById(recipe_id) {
    const rows = await db("recipes as r")
    .leftJoin("steps as s", "s.recipe_id" ,"r.recipe_id")
    .leftJoin("ingredients as i", "i.step_id" , "s.step_id")
    .leftJoin("quantity as q", "q.ingredient_id" , "i.ingredient_id")
    .select(
        "r.recipe_name",
        "s.step_number",
        "s.step_instructions",
        "i.ingredient_id",
        "i.ingredient_name",
        "q.amount",
    )
    // .where({recipe_id})
    
    let stepArr = {steps:[]}

    for(let record of rows){
        if(!stepArr.recipe_name){
          stepArr.recipe_id = record.recipe_id
          stepArr.recipe_name = record.recipe_name
        }
        if(record.step_id){
            stepArr.steps.push({
                step_number:record.step_number,
                step_instructions:record.step_instructions
            })
        }
    
    return stepArr
}}


function get() {
    return db('recipes')
}

module.exports = {
    getRecipeById,
    get,
  };