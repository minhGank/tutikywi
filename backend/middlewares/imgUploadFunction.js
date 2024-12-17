const fs = require("fs");

const imgUploadFunction = async (req, res, next) => {
  try {
    if (!req.files || Object.values(req.files).flat().length == 0) {
      return res.json({ success: false, msg: "There's no file uploaded" });
    }
    let files = Object.values(req.files).flat();
    files.forEach((file) => {
      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/png" &&
        file.mimetype !== "image/gif" &&
        file.mimetype !== "image/webp"
      ) {
        return res.json({ success: true, msg: "Unsupported format" });
      }
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default imgUploadFunction;
