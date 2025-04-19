const express = require('express');
const router = express.Router();
const objectController = require('../controllers/objectController');

router.get('/', objectController.getAllObjects);
// Create a new object
router.post('/', objectController.createObject);

// Get an object by ID
router.get('/:id', objectController.getObject);

// Update an object by ID
router.put('/:id', objectController.updateObject);

// Delete an object by ID
router.delete('/:id', objectController.deleteObject);

module.exports = router;