// Application-level middleware: Request logger with timestamp, method, URL
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = requestLogger;

