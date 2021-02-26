const uuid = require('uuid').v4;

const initiate = (req, res, next) => {
	if (!req.headers['request-id'] || req.headers['request-id'] === '' || req.headers['request-id'] === null) req.headers['request-id'] = uuid();
	res.locals.requestId = req.headers['request-id'];

	next();
};

module.exports = {
	initiate,
};
