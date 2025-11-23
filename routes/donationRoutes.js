const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const { authenticate, isAdmin } = require('../middlewares/auth');

router.get('/', authenticate, isAdmin, donationController.getAll);
router.get('/:id', authenticate, donationController.getById);
router.post('/', authenticate, donationController.create);
router.put('/:id', authenticate, isAdmin, donationController.update);
router.delete('/:id', authenticate, isAdmin, donationController.delete);

module.exports = router;