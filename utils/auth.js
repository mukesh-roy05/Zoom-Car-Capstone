const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const auth = {
  // Middleware to check if user is authenticated
  checkAuth: async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ message: "Unauthorised" });
      }

      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);

      if (!decoded) {
        return res.status(401).json({ message: "Invalid token" });
      }
      // store user id in request object
      req.userId = decoded.id;

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = auth;
