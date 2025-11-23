const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middlewares/auth');

router.get('/', authenticate, isAdmin, userController.getAll);
router.get('/:id', authenticate, isAdmin, userController.getById);
router.put('/:id', authenticate, userController.update); // Users can update own, admin any
router.delete('/:id', authenticate, isAdmin, userController.delete);

module.exports = router;