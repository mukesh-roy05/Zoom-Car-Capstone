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
    });

    res.status(200).json({ message: "User logged in successfully..." });
  },
  logout: async (req, res) => {
    // remove Cookie
    res.clearCookie("token");
    res.status(200).json({ message: "User Logout Successfully..." });
  },
  me: async (req, res) => {
    // Extract USER by ID from request object
    const userId = req.userId;

    // find user by id and exclude password
    const user = await User.findById(userId).select("-password");
    res.status(200).json(user);
  },
};

module.exports = authController;
