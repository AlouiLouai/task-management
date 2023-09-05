const passport = require("passport");

// Middleware function to protect routes with JWT authentication
const auth = (req, res, next) => {
  // Use passport.authenticate with your JWT strategy to verify the token
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err); // Handle unexpected errors
    }
    if (!user) {
      // User is not authenticated
      return res
        .status(401)
        .json({ message: "Authentication failed: Invalid token" });
    }
    // User is authenticated, you can store user info in req.user
    req.user = user;
    // Continue to the next middleware or route handler
    next();
  })(req, res, next);
};

module.exports = auth;
