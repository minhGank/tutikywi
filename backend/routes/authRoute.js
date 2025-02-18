const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.post("/googleAuth", authController.googleAuth);
router.get("/getNewAccessToken", authController.getNewAccessToken);

module.exports = router;
