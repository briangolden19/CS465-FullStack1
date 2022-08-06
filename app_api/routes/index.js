const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

router
    .route('/meals')
    .get(mealsController.mealsList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

module.exports = router;