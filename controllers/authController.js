const User = require("../models/user");
const bcrypt = require("bcrypt");
const authController = {
  register: async (req, res) => {
    try {
      const { username, name, email, password, role } = req.body;
      const email_1 = await User.findOne({ email });
      const username_1 = await User.findOne({ email });

      if (email_1 && username_1) {
        return res.status(400).json({ message: "User already Exist" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create new User
      const newUser = new User({
        username,
        name,
        email,
        password: hashedPassword,
        role,
      });

      await newUser.save();
      res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
