const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

// user related
router.post("/api/register", userController.register);
router.post("/api/activate", userController.activate);
router.post("/api/login", userController.login);
router.get("/api/user", userController.auth, userController.userInfo);

module.exports = router;
