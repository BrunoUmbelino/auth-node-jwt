const express = require("express");
const app = express();

require("./src/config/DBConnection");

const routeBoard = require("./src/routes/auth");
const routeAuth = require("./src/routes/dashboard");

app.use(express.json());

app.use(routeBoard);
app.use(routeAuth);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => console.log("server running"));
