/* GET homepage */
const index = (req, res) => {
	res.render('main', { title: 'Travlr Gataways' });
};

module.exports = {
	index
}