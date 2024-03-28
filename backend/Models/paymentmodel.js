const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentProvider: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{16}$/.test(v); // Validates if cardNumber is 16 digits
            },
            message: props => `${props.value} is not a valid credit card number!`
        }
    },
    expiry: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{2}\/\d{2}/.test(v); // Validates if expiry is in MM/YY format
            },
            message: props => `${props.value} is not a valid expiry date!`
        }
    },
    cvv: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{3}$/.test(v); // Validates if cvv is 3 digits
            },
            message: props => `${props.value} is not a valid CVV!`
        }
    },
    cardholderName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0 // Validates if amount is a non-negative number
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
