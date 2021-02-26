require('dotenv').config();

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const requestMiddleware = require('./middlewares/request');
const { response } = require('./helpers');

const app = express();

app.use(helmet());
app.use(compression());
app.enable('trust proxy');

app.options('*', cors());

app.use(requestMiddleware.initiate);

router(app);

app.use((req, res, next) => {
	next(new Error(response.notFound('URL')));
});

app.use((err, req, res, next) => {
	res.status(err.http_status || 500);
	res.send({
		error: err.error,
		meta: { 'request-id': res.locals.requestId },
	});
});

module.exports = app;