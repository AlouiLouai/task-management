/**
 * Wraps an asynchronous route handler function to handle any errors that may occur during execution.
 *
 * @param {Function} fn - An asynchronous route handler function that takes (req, res, next) parameters.
 * @returns {Function} A middleware function that can be used in Express.js route handlers.
 * @throws {Error} If `fn` is not a valid function.
 *
 * @example
 * // Usage in an Express.js route handler:
 * app.get('/example', catchAsync(async (req, res, next) => {
 *   // Your asynchronous code here
 * }));
 */

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
  
  module.exports = catchAsync;
  