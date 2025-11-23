const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', testimonialController.getAll);
router.get('/:id', testimonialController.getById);
router.post('/', authenticate, isStaffOrAdmin, testimonialController.create);
router.put('/:id', authenticate, isStaffOrAdmin, testimonialController.update);
router.delete('/:id', authenticate, isStaffOrAdmin, testimonialController.delete);

module.exports = router;