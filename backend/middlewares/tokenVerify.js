const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("im here");
    return res.status(401).json({
      success: false,
      msg: "Invalid or expired token",
    });
  }
  const accessToken = authHeader.split(" ")[1];

  try {
    if (!accessToken) {
      return res.status(401).json({
        success: false,
        msg: "Please login to complete this action",
      });
    }
    const tokenVerify = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    req.user = tokenVerify;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      msg: "Invalid or expired token",
    });
  }
};
