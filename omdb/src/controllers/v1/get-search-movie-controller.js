const { response } = require('../../helpers');
const { movieLogic } = require('../../logics');

module.exports = async (req, res, next) => {
	try {
		const { query, headers } = req;
		const results = await movieLogic.searchMovie(query, headers);
		res.send(response.ok('Successfully search movie(s)', results.data, results.pagination));
	} catch (error) {
		next(error);
	}
};