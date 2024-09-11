// Create URL endpoints for API methods
const fruController = require("../controllers/fruit.controller");

module.exports =(express, app) => {
  const routers = express.Router();

  routers.get('/', fruController.all);

  routers.get('/:id', fruController.one);

  // Add routes to server.
  app.use("/greenie/fruits", routers);
}



