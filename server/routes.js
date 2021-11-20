const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

// user related
router.post("/api/register", userController.csrf, userController.register);
router.post("/api/activate", userController.activate);
router.post("/api/login", userController.csrf, userController.login);
router.get("/api/user", userController.auth, userController.userInfo);
router.post(
  "/api/auth/forgot_pass",
  userController.csrf,
  userController.forgot
);
router.post("/api/auth/reset_pass", userController.reset);

module.exports = router;
