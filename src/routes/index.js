const express = require("express");
const userRoute = require("./user.routes");
const authRoute = require("./auth.routes")

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute
  },
  {
    path: "/users",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
