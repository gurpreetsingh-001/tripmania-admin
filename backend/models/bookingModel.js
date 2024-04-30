const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true
    },
    bookingPackageName: {
        type: String,
        required: true
    },
    bookingPackageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    amountPaid: {
        type: Number,
        default: 0
    },
    totalGuest: {
        type: Number,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Cancel', 'Complete', 'Pending'],
        default: 'Pending'
    },
    paymentStatus: {
        type: String,
        enum: ['Unpaid', 'Paid'],
        default: 'Unpaid'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const bookingModel = mongoose.model('Booking', bookingSchema);

module.exports = bookingModel;
