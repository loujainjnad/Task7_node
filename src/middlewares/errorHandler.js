const errorHandler = (err, req, res, next) => {
    console.error(err);
    
    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        return res.status(400).json({
            success: false,
            error: message
        });
    }
    
    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            error: message
        });
    }
    
    // Mongoose cast error (invalid ObjectId)
    if (err.name === 'CastError') {
        const message = 'Resource not found';
        return res.status(404).json({
            success: false,
            error: message
        });
    }
    
    // Default error
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;

