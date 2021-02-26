# OMDB Proxy API

This project (backend assessment purpose) will let you to connect to OMDB API. You can run this project either with docker or run it natively with NPM.

### Pre-requisites
Copy .env.example to .env, and fill all variables needed, including OMBD API credentials.
Copy knexfile.js.example to knexfile.js, and fill it with your database configuration. Make sure you have created the schema in your database.
Run migrations by doing this on your terminal in root of project:
```bash
knex migrate:latest
```

### Run with NPM
You can instantly run this project with npm by doing this:
```bash
npm install
npm run start
```

### Run with docker
This project also included with Dockerfile that you can use to serve this project with Docker or other container orchestrator.

### Available endpoints
There are two available endpoints that you can hit.
1. GET - /v1/search?query=[search_query]&page=[page_number]
This endpoint will return movies based on your search query and page number
2. GET - /v1/detail/[IMDB_ID]
This endpoint will return movie detail by IMDB ID

### Unit Tests
You can run this project's unit test by doing this:
```bash
npm run test
```
Or show coverages of tests by doing this:
```bash
npm run coverage
```
