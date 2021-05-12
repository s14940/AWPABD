const express = require('express');
const router = express.Router();

const serversControler = require('../controllers/serversController');

router.get('/', serversControler.showServersList);
router.get('/add', serversControler.showAddServersForm);
router.get('/details/:serverId', serversControler.showServersDetails);

module.exports = router;