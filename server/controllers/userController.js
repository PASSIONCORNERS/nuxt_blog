const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userController = {
  register: async (req, res) => {
    try {
      new User(req.body)
        .register()
        .then(() => {
          res
            .status(200)
            .json({ message: "Welcome! Please check your email." });
        })
        .catch((error) => {
          res.status(500).json({ message: error });
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  activate: async (req, res) => {
    try {
      new User(req.body)
        .activate()
        .then(() => {
          res.status(200).json({
            message: "Your account is activated, you can now log in 😃",
          });
        })
        .catch((error) => {
          res.status(500).json({ message: error });
        });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  login: async (req, res) => {
    new User(req.body)
      .login()
      .then((access_token) => {
        res.status(200).json(access_token);
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  },
  // mw
  auth: async (req, res, next) => {
    try {
      //check access token
      const token = req.header("Authorization");
      if (!token)
        return res.status(400).json({ message: "Authentication failed" });
      // validate token
      jwt.verify(token, process.env.ACCESSTOKEN, (error, user) => {
        if (error)
          return res.status(400).json({ message: "Authentication failed" });
        // success
        // console.log("auth mw >>>", user.user);
        req.user = user;
        next();
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  userInfo: async (req, res) => {
    try {
      new User()
        .getUser(req.user.user)
        .then((userProfile) => {
          // console.log("userInfo >>>", userProfile);
          res.status(200).json(userProfile);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: error });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
};

module.exports = userController;