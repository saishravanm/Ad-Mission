const mongoose = require("mongoose");
const paymentSchema = mongoose.Schema({
    cardNumber: {
        type: Number
    },
});

module.exports = mongoose.model("Payment", paymentSchema);