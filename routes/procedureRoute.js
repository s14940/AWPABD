const express = require('express');
const router = express.Router();

const procedureControler = require('../controllers/procedureController');

router.get('/', procedureControler.showProcedureList);
router.get('/add', procedureControler.showAddProcedureForm);
router.get('/details/:procId', procedureControler.showProcedureDetails);

module.exports = router;