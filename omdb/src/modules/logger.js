const { knex } = require('../helpers')

/**
 * Insert log to table integration_logs
 *
 * @param Object axiosResponse - response object from Axios
 *
 * @returns void
 */
const integrationLog = async (axiosResponse) => {
	const data = {
		headers: JSON.stringify(axiosResponse.config.headers),
		response: JSON.stringify(axiosResponse.data),
		status: axiosResponse.status,
		url: axiosResponse.config.url,
		errno: axiosResponse.errno,
	};
	await knex.insert(data)
		.into('integration_logs');
};

module.exports = {
	integrationLog,
};
