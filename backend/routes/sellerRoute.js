const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/sellerControllers.js");
const tokenVerify = require("../middlewares/tokenVerify.js");

router.post(
  "/createSellerProfile",
  tokenVerify.verify,
  sellerController.createSellerProfile
);

module.exports = router;
