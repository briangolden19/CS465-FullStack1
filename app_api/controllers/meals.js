const mongoose = require('mongoose');
const model = mongoose.model('meals');

const mealsList = async(req, res) => {
    model
        .find({})
        .exec((err,meals) => {
            if (!meals){
                return res
                    .status(404)
                    .json({"message":"meals not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            } else {
                return res  
                    .status(200)
                    .json(meals);
            }
        });
};

const mealsFindCode = async(req, res) => {
    model
        .find({'code': req.params.mealCode })
        .exec((err,meal) => {
            if (!meal){
                return res
                    .status(404)
                    .json({"message":"meal not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            } else {
                return res  
                    .status(200)
                    .json(meal);
            }
        });
};

module.exports = {
    mealsList,
    mealsFindCode
};