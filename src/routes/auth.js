const RouteAuth = require("express").Router();
const UserController = require("../controller/UserController");
const LoginController = require("../controller/LoginController");

RouteAuth.post("/register", UserController.create);

RouteAuth.post("/login", LoginController.login);

module.exports = RouteAuth;
