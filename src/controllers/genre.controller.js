const Genre = require('../models/Genre');

class GenreController {
    // Get all genres
    async getAllGenres(req, res, next) {
        try {
            const genres = await Genre.find().sort({ createdAt: -1 });
            
            res.status(200).json({
                success: true,
                count: genres.length,
                data: genres
            });
        } catch (error) {
            throw new Error(`Failed to fetch genres: ${error.message}`);
        }
    }

    // Get single genre by ID
    async getGenreById(req, res, next) {
        try {
            const genre = await Genre.findById(req.params.id);
            
            if (!genre) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Genre not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                data: genre
            });
        } catch (error) {
            throw new Error(`Failed to fetch genre: ${error.message}`);
        }
    }

    // Create new genre
    async createGenre(req, res, next) {
        try {
            const genre = await Genre.create(req.body);
            
            res.status(201).json({
                success: true,
                data: genre
            });
        } catch (error) {
            throw new Error(`Failed to create genre: ${error.message}`);
        }
    }

    // Update existing genre
    async updateGenre(req, res, next) {
        try {
            const genre = await Genre.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );
            
            if (!genre) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Genre not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                data: genre
            });
        } catch (error) {
            throw new Error(`Failed to update genre: ${error.message}`);
        }
    }

    // Delete genre
    async deleteGenre(req, res, next) {
        try {
            const genre = await Genre.findByIdAndDelete(req.params.id);
            
            if (!genre) {
                return res.status(404).json({ 
                    success: false,
                    message: 'Genre not found' 
                });
            }
            
            res.status(200).json({
                success: true,
                message: 'Genre deleted successfully',
                data: {}
            });
        } catch (error) {
            throw new Error(`Failed to delete genre: ${error.message}`);
        }
    }
}

module.exports = new GenreController();

