var express = require('express');
const birds_controllers= require('../controllers/birds');
var router = express.Router();
/* GET costumes */
router.get('/', birds_controllers.birds_view_all_Page);
module.exports = router;
