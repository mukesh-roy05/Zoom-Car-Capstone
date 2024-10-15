const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "User already Exist..." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create new User
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
      });

      await newUser.save();
      res.status(201).json({ message: "User Registered Successfully..." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    //check if user exist
    const user = await User.findOne({ email });

    // if user not exist
    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid Password..." });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    // store token in  cookies
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      // sameSite: "strict",
      // secure: process.env.NODE_ENV === "production" ? true : false,
      // maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "User logged in successfully..." });
    
  },
};

module.exports = authController;
