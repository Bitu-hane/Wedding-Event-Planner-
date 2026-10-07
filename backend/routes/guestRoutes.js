const express = require('express');
const router = express.Router();
const { getGuests, createGuest, updateGuest, deleteGuest } = require('../controllers/guestController');

router.get('/', getGuests);
router.post('/', createGuest);
router.put('/:id', updateGuest);
router.delete('/:id', deleteGuest);

module.exports = router;
