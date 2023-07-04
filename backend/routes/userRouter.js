const express = require('express');
const router = express.Router();

const {  registerUser, loginUser, getMe, deleteGoal } = require('../controllers/userController.js');
const { get } = require('mongoose');

const {protect} = require('../middleware/authMiddleware.js')

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect, getMe);







module.exports = router;