const auth = {
  // Middleware to check if user is authenticated
  checkAuth: async (req, res, next) => {
    try {
      const token = req.cookies.token;

      console.log(token);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = auth;
