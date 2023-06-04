const router = require('express').Router();
const ClientController = require("../controllers/client");



router.post('/create',ClientController.createClient);
router.delete('/deleteOne/:id',ClientController.deleteOne);
router.get('/clients',ClientController.getAllClient);


module.exports = router;



