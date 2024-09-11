const controller = require("../controllers/user.controller.js");

module.exports = (express, app) => {
  
  const router = express.Router();

  // Select all users.
  router.get("/", controller.all);

  // Select a single user with id.
  router.get("/select/:id", controller.one);

  // Add routes to server.
  app.use("/greenie/users", router);
};
