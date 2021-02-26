const { omdb } = require('../modules');
const { response } = require('../helpers');

/**
 * Search movie with some query parameters
 *
 * @param Object queries - query from request
 * @param Object headers - headers from request
 *
 * @returns search movie results
 */
const searchMovie = async (queries, headers) => {
	const results = await omdb.search({
		s: queries.query,
		page: queries.page,
	}, headers);

	return {
		data: results.Search,
		pagination: {
			total_results: parseInt(results.totalResults, 10),
			total_pages: Math.ceil(results.totalResults / 10),
			page: parseInt(queries.page, 10) || 1,
		},
	};
};

/**
 * Get movie detail by IMDB ID
 *
 * @param String id - parameter ID from request 
 * @param Object headers - headers from request
 *
 * @returns movie detail result
 */
const getMovieDetail = async (id, headers) => {
	const result = await omdb.detailByID(id, headers);
	if (!result) throw new Error(response.notFound('movie'));
	return result
};

module.exports = {
	searchMovie,
	getMovieDetail,
};
