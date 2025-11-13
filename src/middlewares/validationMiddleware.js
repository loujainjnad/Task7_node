const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

// Middleware to validate if genre exists before update/delete
const validateGenreExists = async (req, res, next) => {
    try {
        const genre = await Genre.findById(req.params.id);
        
        if (!genre) {
            return res.status(404).json({
                success: false,
                message: 'Genre not found'
            });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Failed to validate genre: ${error.message}`
        });
    }
};

// Middleware to validate if movie exists before update/delete
const validateMovieExists = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Failed to validate movie: ${error.message}`
        });
    }
};

module.exports = {
    validateGenreExists,
    validateMovieExists
};

