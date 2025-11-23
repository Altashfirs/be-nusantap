const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);
router.post('/', authenticate, isStaffOrAdmin, eventController.create);
router.put('/:id', authenticate, isStaffOrAdmin, eventController.update);
router.delete('/:id', authenticate, isStaffOrAdmin, eventController.delete);

module.exports = router;