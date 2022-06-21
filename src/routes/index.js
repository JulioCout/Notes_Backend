const {Router} = require("Express");

const usersRoutes = require("./users.routes")

const routes = Router();

routes.use("/users", usersRoutes);

module.exports = routes;