const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/*Render the travel List View */
const renderMealList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways' + ' - Meals';

    if(!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if(!responseBody.length) {
            message = 'No meals exist in database!';
        }
    }

    res.render('meals', {
        title: pageTitle,
        meals: responseBody,
        message
    });
};

/* GET travel list view */
const mealList = (req, res) =>{
    const path = '/api/meals';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> mealController.mealList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderMealList(req, res, body);
        }
    )
}

module.exports = {
    mealList
};