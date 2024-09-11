// Create URL endpoints for API methods
const routers = express.Router();
const fruController = require("../controllers/fruit.controller");


routers.get('/', fruController.all);

routers.get('/:id', fruController.one);

module.exports = routers;  

