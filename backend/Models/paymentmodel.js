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

// check if the user is new and autocomplete their information
paymentSchema.pre('save', async function(next) {
    // Check if there are any existing payments made by the user
    const existingPayment = await this.constructor.findOne({ userId: this.userId }).sort({ paymentDate: -1 });
    //find user id from database and sort the payment date in descending order, which gets most recent payment

    // If the user has made a previous payment, autocomplete their information
    if (existingPayment) {
        this.cardNumber = existingPayment.cardNumber;
        this.expiry = existingPayment.expiry;
        this.cvv = existingPayment.cvv;
        this.cardholderName = existingPayment.cardholderName;
    } else {
        // If the user is making a payment for the first time, set a flag to indicate it's a new user
        this.isNewUser = true;
    }

    next();
});



module.exports = mongoose.model("Payment", paymentSchema);
