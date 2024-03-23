const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentProvider: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    cardholderName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model("Payment", paymentSchema);
