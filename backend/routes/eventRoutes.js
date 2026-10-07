const express = require('express');
const router = express.Router();
const { getEventDetails, updateEventDetails } = require('../controllers/eventController');

router.get('/', getEventDetails);
router.put('/', updateEventDetails);

module.exports = router;
