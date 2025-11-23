const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', blogController.getAll);
router.get('/:id', blogController.getById);
router.post('/', authenticate, isStaffOrAdmin, blogController.create);
router.put('/:id', authenticate, isStaffOrAdmin, blogController.update);
router.delete('/:id', authenticate, isStaffOrAdmin, blogController.delete);

module.exports = router;