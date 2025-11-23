const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const { authenticate, isStaffOrAdmin } = require('../middlewares/auth');

router.get('/', pageController.getAll);
router.get('/id/:id', pageController.getById);
router.get('/:slug', pageController.getBySlug);
router.post('/', authenticate, isStaffOrAdmin, pageController.create);
router.put('/:id', authenticate, isStaffOrAdmin, pageController.update);
router.delete('/:id', authenticate, isStaffOrAdmin, pageController.delete);

module.exports = router;