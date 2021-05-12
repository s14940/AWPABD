const express = require('express');
const router = express.Router();

const userControler = require('../controllers/userController');

router.get('/', userControler.showUserList);
router.get('/add', userControler.showAddUserForm);
router.get('/details/:userId', userControler.showUserDetails);

module.exports = router;
