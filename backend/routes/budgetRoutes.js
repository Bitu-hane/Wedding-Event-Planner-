const express = require('express');
const router = express.Router();
const { getBudget, addBudgetItem, updateBudgetItem, deleteBudgetItem } = require('../controllers/budgetController');

router.get('/', getBudget);
router.post('/', addBudgetItem);
router.put('/:id', updateBudgetItem);
router.delete('/:id', deleteBudgetItem);

module.exports = router;
