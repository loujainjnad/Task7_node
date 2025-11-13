const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        trim: true
    },
    director: {
        type: String,
        required: [true, 'Director name is required'],
        trim: true
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
        required: false
    },
    releaseYear: {
        type: Number,
        validate: {
            validator: function(value) {
                return value >= 1888 && value <= new Date().getFullYear() + 10;
            },
            message: 'Release year must be between 1888 and a reasonable future year'
        }
    },
    rating: {
        type: Number,
        min: [0, 'Rating must be at least 0'],
        max: [10, 'Rating must be at most 10']
    },
    duration: {
        type: Number,
        min: [1, 'Duration must be at least 1 minute']
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be positive']
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);

