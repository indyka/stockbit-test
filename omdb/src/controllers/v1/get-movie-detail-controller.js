const { response } = require('../../helpers');
const { movieLogic } = require('../../logics');

module.exports = async (req, res, next) => {
	try {
		const { params, headers } = req;
		const result = await movieLogic.getMovieDetail(params.id, headers);
		res.send(response.ok('Successfully get detail of movie', result));
	} catch (error) {
		next(error);
	}
};