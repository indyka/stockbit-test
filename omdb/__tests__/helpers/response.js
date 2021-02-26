const { ok, findResourceError, notFound } = require('../../src/helpers/response');

describe('Response ok', () => {
    const result = {
		"Title": "The Magic of David Copperfield IV: The Vanishing Airplane",
		"Year": "1981",
		"Rated": "N/A",
		"Released": "26 Oct 1981",
	};

	test('Must return success response payload', async () => {
		const returnOK = ok('Successfully get detail of movie', result)

		expect(returnOK).toEqual({
			"meta": {
				"status": "success",
				"message": "Successfully get detail of movie"
			},
			"data": {
				"Title": "The Magic of David Copperfield IV: The Vanishing Airplane",
				"Year": "1981",
				"Rated": "N/A",
				"Released": "26 Oct 1981",
			}
		});
    });
});

describe('Response failed find movie', () => {
	test('Must throw failed find resource error object', async () => {
		try {
			findResourceError('movie');
		} catch (error) {
			expect(error).toEqual({
				"error": {
					"data": undefined,
					"message": "Failed find resource: movie",
					"status": "error",
				},
				"http_status": 500,
				"parentError": undefined,
			});
		}
    });
});

describe('Response not found movie', () => {
	test('Must throw resource not found error object', async () => {
		try {
			notFound('movie');
		} catch (error) {
			expect(error).toEqual({
				"error": {
					"data": undefined,
					"message": "Resource not found: movie",
					"status": "error",
				},
				"http_status": 404,
				"parentError": undefined,
			});
		}
    });
});
