const ok = (message, data, pagination = {}) => ({
	meta: {
		status: 'success',
		message,
		...pagination,
	},
	data,
});

const notFound = (message, data) => {
	const obj = { http_status: 404, error: {
		status: 'error',
		message: `Resource not found: ${message}`,
		data: data || undefined,
	}};
	throw obj;
};

const findResourceError = (message, data, parentError) => {
	const obj = { http_status: 500, error: {
		status: 'error',
		message: `Failed find resource: ${message}`,
		data: data || undefined,
	}, parentError};
	throw obj;
};

module.exports = {
	ok,
	notFound,
	findResourceError,
};
