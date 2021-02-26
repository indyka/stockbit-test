const axios = require('axios');
const { response } = require('../helpers');
const logger = require('./logger');

const baseURL = process.env.OMDB_API_URL;
const apiKey = process.env.OMDB_API_KEY;

/**
 * Search movies to OMBD API
 *
 * @param Object queries - transformed query parameters for OMDB API
 * @param Object headers - headers from request
 *
 * @returns query results
 */
const search = async (queries, headers) => {
	try {
		const response = await axios.get(`${baseURL}?s=${queries.s || ''}&apikey=${apiKey}&page=${queries.page || 1}`, {
			headers: { ['request-id']: headers['request-id'] }
		});

		logger.integrationLog(response);

		if (response.data.Response !== 'True') throw new Error('malformed response from omdb');

		return response.data;
	} catch (error) {
		if (error.request) logger.integrationLog(error);
		throw new Error(response.findResourceError('search movie from ombd', null, error));
	}
};

/**
 * Get movie detail to OMBD API by IMDB ID
 *
 * @param String id - IMDB ID
 * @param Object headers - headers from request
 *
 * @returns movie detail
 */
const detailByID = async (id, headers) => {
	try {
		const response = await axios.get(`${baseURL}?i=${id}&apikey=${apiKey}`, {
			headers: { ['request-id']: headers['request-id'] }
		});

		logger.integrationLog(response);

		if (response.data.Response === 'False' && response.data.Error === 'Incorrect IMDb ID.') return null;
		else if (response.data.Response === 'False') throw new Error('malformed response from omdb');

		return response.data;
	} catch (error) {
		if (error.request) logger.integrationLog(error);
		throw new Error(response.findResourceError('movie detail from ombd', null, error));
	}
};

module.exports = {
	search,
	detailByID,
};
