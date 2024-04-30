const bookingModel = require('../models/bookingModel');

const createBooking = async (req, res) => {
    try {
        const {
            bookingId,
            bookingPackageName,
            bookingPackageId,
            clientName,
            email,
            phoneNo,
            amountPaid,
            totalGuest,
            bookingDate,
            bookingTime,
            status,
            paymentStatus
        } = req.body;

        const booking = new bookingModel({
            bookingId,
            bookingPackageName,
            bookingPackageId,
            clientName,
            email,
            phoneNo,
            amountPaid,
            totalGuest,
            bookingDate,
            bookingTime,
            status,
            paymentStatus
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createBooking };
