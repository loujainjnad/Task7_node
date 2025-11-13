const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

class MovieController {
    // Get all movies with genre populated
    async getAllMovies(req, res, next) {
        try {
            const movies = await Movie.find().populate('genre').sort({ createdAt: -1 });
            
            res.status(200).json({
                success: true,
                count: movies.length,
                data: movies
            });
        } catch (error) {
            throw new Error(`Failed to fetch movies: ${error.message}`);
        }
    }

    // Get single movie by ID with genre populated
    async getMovieById(req, res, next) {
        try {
            const movie = await Movie.findById(req.params.id).populate('genre');
            
            if (!movie) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Movie not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                data: movie
            });
        } catch (error) {
            throw new Error(`Failed to fetch movie: ${error.message}`);
        }
    }

    // Create new movie
    async createMovie(req, res, next) {
        try {
            // Validate genre exists if provided
            if (req.body.genre) {
                const genreExists = await Genre.findById(req.body.genre);
                if (!genreExists) {
                    return res.status(404).json({
                        success: false,
                        message: 'Genre not found'
                    });
                }
            }

            const movie = await Movie.create(req.body);
            const populatedMovie = await Movie.findById(movie._id).populate('genre');
            
            res.status(201).json({
                success: true,
                data: populatedMovie
            });
        } catch (error) {
            throw new Error(`Failed to create movie: ${error.message}`);
        }
    }

    // Update existing movie
    async updateMovie(req, res, next) {
        try {
            // Validate genre exists if provided
            if (req.body.genre) {
                const genreExists = await Genre.findById(req.body.genre);
                if (!genreExists) {
                    return res.status(404).json({
                        success: false,
                        message: 'Genre not found'
                    });
                }
            }

            const movie = await Movie.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            ).populate('genre');
            
            if (!movie) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Movie not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                data: movie
            });
        } catch (error) {
            throw new Error(`Failed to update movie: ${error.message}`);
        }
    }

    // Delete movie
    async deleteMovie(req, res, next) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            
            if (!movie) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Movie not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                message: 'Movie deleted successfully',
                data: {}
            });
        } catch (error) {
            throw new Error(`Failed to delete movie: ${error.message}`);
        }
    }

    // Get movies by specific genre
    async getMoviesByGenre(req, res, next) {
        try {
            const movies = await Movie.find({ genre: req.params.genreId }).populate('genre').sort({ createdAt: -1 });
            
            res.status(200).json({
                success: true,
                count: movies.length,
                data: movies
            });
        } catch (error) {
            throw new Error(`Failed to fetch movies by genre: ${error.message}`);
        }
    }
}

module.exports = new MovieController();

