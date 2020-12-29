const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token not found. Authrization Denied",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token is not valid",
    });
  }
};
