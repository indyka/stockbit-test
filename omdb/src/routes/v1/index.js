const express = require('express');
const { getSearchMovieController, getMovieDetailController } = require('../../controllers/v1')

const router = express();

router.get('/search', getSearchMovieController);
router.get('/detail/:id', getMovieDetailController);

module.exports = router;
