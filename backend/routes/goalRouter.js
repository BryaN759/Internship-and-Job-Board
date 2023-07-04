const express = require('express');
const router = express.Router();

const {  getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')

const { protect } = require('../middleware/authMiddleware.js')
// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/').get(protect, getGoals).post(protect, setGoal);

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);



module.exports = router;
