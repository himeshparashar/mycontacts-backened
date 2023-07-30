// Import the constants object from "../constants"
const {constants} = require("../constants")

// Define the error handler function with err, req, res, and next parameters
const errorHandler = (err, req, res, next) => {
    // Get the status code from the response object, or default to 500
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Use a switch statement to handle different status codes
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            // If the status code is 400, respond with a validation error message
            res.status(statusCode).json({ title: "Validation Failed", message: err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND :
            // If the status code is 404, respond with a not found error message
            res.status(statusCode).json({ title: "Not Found", message: err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED :
            // If the status code is 401, respond with an unauthorized error message
            res.status(statusCode).json({ title: "Unauthorized", message: err.message, stackTrace: err.stack});
            break;
        case constants.FORBIDDEN :
            // If the status code is 403, respond with a forbidden error message
            res.status(statusCode).json({ title: "Forbidden", message: err.message, stackTrace: err.stack});
            break;
        case constants.SERVER_ERROR :
            // If the status code is 500, respond with a server error message
            res.status(statusCode).json({ title: "Server Error", message: err.message, stackTrace: err.stack});
            break;
        default:
            // If the status code is not recognized, log an error message
            console.log(`Unhandled error with status code: ${statusCode}`);
            // Respond with a generic error message and status code 500
            res.status(500).json({ title: "Internal Server Error", message: "An unexpected error occurred", stackTrace: err.stack});
            break;
    }
};

// Export the error handler function for use in other modules
module.exports = errorHandler;
