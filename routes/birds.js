var express = require('express');
const birds_controllers= require('../controllers/birds');
var router = express.Router();
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET costumes */
router.get('/', birds_controllers.birds_view_all_Page);
/* GET detail costume page */
router.get('/detail',secured, birds_controllers.birds_view_one_Page);
/* GET create costume page */
router.get('/create',secured, birds_controllers.birds_create_Page);
/* GET create update page */
router.get('/update',secured, birds_controllers.birds_update_Page);
/* GET delete costume page */
router.get('/delete',secured, birds_controllers.birds_delete_Page);

module.exports = router;
