const { Router } = require('express');
const router = Router();
const maincontroller = require('../controler/maincontroler');

router.get('/', maincontroller.get_index)
router.get('/portfolio-details', maincontroller.get_portfolio_details)
router.post('/send_feedback', maincontroller.post_send_feedback)


module.exports = router;