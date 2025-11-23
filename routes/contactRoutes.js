const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', authenticate, isStaffOrAdmin, contactController.getAll);
router.get('/:id', authenticate, isStaffOrAdmin, contactController.getById);
router.post('/', contactController.create); // Public for submissions
router.put('/:id/read', authenticate, isStaffOrAdmin, contactController.markAsRead);
router.delete('/:id', authenticate, isStaffOrAdmin, contactController.delete);

module.exports = router;