const express = require('express');
const {createBooking} = require('../controller/booking.controller');

const bookingRoutes = express.Router();

bookingRoutes.post('/create', createBooking);

module.exports = bookingRoutes;
