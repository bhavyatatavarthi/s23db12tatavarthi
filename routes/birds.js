var express = require('express');
const birds_controllers= require('../controllers/birds');
var router = express.Router();
/* GET costumes */
router.get('/', birds_controllers.birds_view_all_Page);
/* GET detail costume page */
router.get('/detail', birds_controllers.birds_view_one_Page);
/* GET create costume page */
router.get('/create', birds_controllers.birds_create_Page);
/* GET create update page */
router.get('/update', birds_controllers.birds_update_Page);
/* GET delete costume page */
router.get('/delete', birds_controllers.birds_delete_Page);

module.exports = router;
