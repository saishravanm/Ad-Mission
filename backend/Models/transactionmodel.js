const mongoose = require('mongoose');


const transactionSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
   
});


module.exports = mongoose.model("Transaction", transactionSchema);
