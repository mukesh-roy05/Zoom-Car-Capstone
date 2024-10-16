const User = require("../models/user");
const userController = {
  getUser: async (req, res) => {
    try {
      // get user id from the req object
      const userId = req.userId;

      const user = await User.findById(userId).select("-password -__v");
      if (!user) {
        return res.status(400).json({ message: "User not found..." });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      // get user name from req body
      const { name } = req.body;
      //get user id from the req object
      const userId = req.userId;

      if (!userId) {
        return res.status(404).json({ message: "User not found..." });
      }
      // update the uer in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name },
        { new: true }
      ).select("-password -__v");

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      //get user id from the req object
      const userId = req.userId;

      // Delete the uer in the database
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found..." });
      }

      res.status(200).json({ messgae: "User Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
