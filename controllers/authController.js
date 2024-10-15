const User = require("../models/user");
const bcrypt = require("bcrypt");
const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "User already Exist" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create new User
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();
      res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
