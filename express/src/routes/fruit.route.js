const fruController = require("../controllers/fruit.controller.js");

module.exports =(express, app) => {

  const router = express.Router();

  router.get('/', fruController.all);

  // router.get('/:id', fruController.one);

  // Add routes to server.
  app.use("/greenie/fruits", router);
}



