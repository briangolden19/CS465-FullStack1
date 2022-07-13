const fs = require("fs");
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

/* GET travel view */
const travel = (req, res) => {
    pageTitle = 'Travlr Getaways' + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}