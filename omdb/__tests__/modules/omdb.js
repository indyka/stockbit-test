const { detailByID, search } = require('../../src/modules/omdb');
const axios = require('axios');

jest.mock('axios');

describe('Detail movie API to OMDB', () => {
	const headers = {
		'request-id': '1234-ABCD',
	};

	test('Must return success response payload from OMDB', async () => {
		const id = 'tt0293373';

		axios.get.mockImplementation(() => Promise.resolve({ data: { title: 'Doraemon' } }));

		const returnMovieDetail = await detailByID(id, headers);

		expect(returnMovieDetail).toEqual({
			"title": "Doraemon",
		});
    });

	test('Must throw error when response from OMDB is malformed', async () => {
		const id = 'wrong-id';

		axios.get.mockImplementation(() => Promise.resolve({ data: { Response: 'False' } }));

		try {
			await detailByID(id, headers);
		} catch (error) {
			expect(error).toEqual({
				"error": {
					"data": undefined,
					"message": "Failed find resource: movie detail from ombd",
					"status": "error",
				},
				"http_status": 500,
				"parentError": new Error('malformed response from omdb'),
			});
		}
    });
});

describe('Search movie API to OMDB', () => {
	const headers = {
		'request-id': '1234-ABCD',
	};

	test('Must return success response payload from OMDB', async () => {
		const queries = {
			s: 'ABC',
		};

		axios.get.mockImplementation(() => Promise.resolve({ data: { title: 'Doraemon', Response: 'True' } }));

		const returnSearchResults = await search(queries, headers);

		expect(returnSearchResults).toEqual({
			"Response": "True",
			"title": "Doraemon",
		});
    });

	test('Must throw error when response from OMDB is malformed because of empty search query', async () => {
		axios.get.mockImplementation(() => Promise.resolve({ data: { Response: 'False' } }));

		try {
			await search({}, headers);
		} catch (error) {
			expect(error).toEqual({
				"error": {
					"data": undefined,
					"message": "Failed find resource: search movie from ombd",
					"status": "error",
				},
				"http_status": 500,
				"parentError": new Error('malformed response from omdb'),
			});
		}
    });
});
