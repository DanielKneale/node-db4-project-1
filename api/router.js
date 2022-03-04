const express = require('express');
const recipe = require('./model');

const router = express.Router();

router.get('/' , (req,res,next) =>{
    recipe.get()
    .then(recipe =>{
        res.status(200).json(recipe)
    })
    .catch(next)
})

router.get('/:id', (req,res,next) =>{
    recipe.getRecipeById(req.params.id)
    .then(recipe =>{
        res.status(200).json(recipe);
    })
    .catch(next)
})

module.exports = router;