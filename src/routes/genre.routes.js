const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre.controller');
const { validateGenreExists } = require('../middlewares/validationMiddleware');

// Wrapper function to catch thrown errors from async controllers
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// GET /api/genres - Get all genres
router.get('/', asyncHandler(genreController.getAllGenres.bind(genreController)));

// GET /api/genres/:id - Get single genre by ID
router.get('/:id', asyncHandler(genreController.getGenreById.bind(genreController)));

// POST /api/genres - Create new genre
router.post('/', asyncHandler(genreController.createGenre.bind(genreController)));

// PUT /api/genres/:id - Update existing genre
router.put('/:id', validateGenreExists, asyncHandler(genreController.updateGenre.bind(genreController)));

// DELETE /api/genres/:id - Delete genre
router.delete('/:id', validateGenreExists, asyncHandler(genreController.deleteGenre.bind(genreController)));

module.exports = router;

