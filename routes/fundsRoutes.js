const express = require('express');
const router = express.Router();
const fundsController = require('../controllers/fundsController');
const { authenticate, isAdmin } = require('../middlewares/auth');

router.get('/', authenticate, isAdmin, fundsController.getAll);
router.get('/:id', authenticate, isAdmin, fundsController.getById);
router.post('/', authenticate, fundsController.create);
router.put('/:id', authenticate, isAdmin, fundsController.update);
router.delete('/:id', authenticate, isAdmin, fundsController.delete);

module.exports = router;