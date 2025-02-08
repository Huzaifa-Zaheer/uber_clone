const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast of 6 characters long.'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be a number and atleast 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorbike', 'auto' ]).withMessage('Vehicle should be car, motorbike or auto'),
    ], captainController.registerCaptain
);




module.exports = router;