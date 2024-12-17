const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadImg");
import imgUploadFunction from "../middlewares/imgUploadFunction";
router.post("/uploadImgGig", imgUploadFunction, uploadController.uploadImgGig);

module.exports = router;
