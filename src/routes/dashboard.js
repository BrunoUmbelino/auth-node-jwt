const RouteBoard = require("express").Router();
const verifyToken = require("../verifyToken");

RouteBoard.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    user: `${req.user}`,
    xpto: "500%",
    bbc: "-50%",
    mglu: "10%",
  });
});

module.exports = RouteBoard;
