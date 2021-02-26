const v1Router = require('./v1');

module.exports = (app) => {
	app.use('/v1', v1Router);
};
