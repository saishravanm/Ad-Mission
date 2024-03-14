const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    provider: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    securityCode: {
        type: String,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

paymentSchema.pre("save", async function (next) {
    const payment = this;

    try {
        // Hash sensitive data before saving
        const salt = await bcrypt.genSalt(10);
        if (payment.isModified("cardNumber")) {
            payment.cardNumber = await bcrypt.hash(payment.cardNumber, salt);
        }
        if (payment.isModified("securityCode")) {
            payment.securityCode = await bcrypt.hash(payment.securityCode, salt);
        }
        next();
    } catch (error) {
        return next(error);
    }
});


module.exports = mongoose.model("Payment", paymentSchema);
