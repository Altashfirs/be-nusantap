const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', statsController.getAll);
router.get('/:id', statsController.getById);
router.post('/', authenticate, isStaffOrAdmin, statsController.create);
router.put('/:id', authenticate, isStaffOrAdmin, statsController.update);
router.delete('/:id', authenticate, isStaffOrAdmin, statsController.delete);

module.exports = router;