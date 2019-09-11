const Recipe = require('../models/recipeSchema');

exports.getAllRecipes = (req, res, next) => {
    Recipe.find().then(
        (recipes) => {
            res.status(200).json(recipes);
        }
    ).catch(
        (error) => {
            res.status(500).json({
                message: 'Api failed to connect due to' + error, 
            })
        }
    );
}

exports.createRecipe = (req, res, next) => {    
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time: req.body.time,
        difficulty: req.body.difficulty,
        userId: req.body.userId,
    });

    recipe.save().then(
        () => {
            res.status(201).json({
                message: 'Recipe saved to db succesfully!'
            })
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error,
            });
        }
    );

}

exports.getOneRecipe = (req, res, next) => {
    const { id } = req.params;
    Recipe.findOne({ _id: id }).then(
        (recipe) => {
            res.status(200).json(recipe);
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error,
            });
        }
    )
}

exports.updateRecipe = (req, res, next) => {
    const { id } = req.params;
    const recipe = new Recipe({
        _id: id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        time: req.body.time,
        difficulty: req.body.difficulty,
        userId: req.body.userId,
    })
    Recipe.updateOne({ _id: id }, recipe).then(
        () => {
            res.status(201).json({
                message: 'Recipe updated succesfully!',
            })
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error,
            })
        }
    );
}

exports.deleteRecipe = (req, res, next) => {
    const { id } = req.params;
    Recipe.deleteOne({ _id: id }).then(
        () => {
            res.status(200).json({
                message: 'Recipe deleted succesfully from db!'
            })
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error,
            })
        }
    )
}