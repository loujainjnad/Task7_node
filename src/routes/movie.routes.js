const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');
const { validateMovieExists } = require('../middlewares/validationMiddleware');

// Wrapper function to catch thrown errors from async controllers
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// GET /api/movies - Get all movies with genre populated
router.get('/', asyncHandler(movieController.getAllMovies.bind(movieController)));

// GET /api/movies/genre/:genreId - Get movies by specific genre
router.get('/genre/:genreId', asyncHandler(movieController.getMoviesByGenre.bind(movieController)));

// GET /api/movies/:id - Get single movie by ID with genre populated
router.get('/:id', asyncHandler(movieController.getMovieById.bind(movieController)));

// POST /api/movies - Create new movie
router.post('/', asyncHandler(movieController.createMovie.bind(movieController)));

// PUT /api/movies/:id - Update existing movie
router.put('/:id', validateMovieExists, asyncHandler(movieController.updateMovie.bind(movieController)));

// DELETE /api/movies/:id - Delete movie
router.delete('/:id', validateMovieExists, asyncHandler(movieController.deleteMovie.bind(movieController)));

module.exports = router;

