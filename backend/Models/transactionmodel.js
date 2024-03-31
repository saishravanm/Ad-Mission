const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const transactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: [true, 'Payment ID is required']
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: [true, 'Event ID is required']
    },
    transactionDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'refunded'],
        default: 'pending',
        required: [true, 'Status is required']
    }
});

transactionSchema.pre("save", async function(next) {
    const transaction = this;

    // Validate User existence
    const userExists = await mongoose.model('User').findById(this.user);
    if (!userExists) {
        throw new Error('Not valid input: User does not exist');
    }

    // Validate Event existence
    const eventExists = await mongoose.model('Event').findById(this.event);
    if (!eventExists) {
        throw new Error('Not valid input: Event does not exist');
    }

    
    const paymentExists = await mongoose.model('Payment').findById(this.payment);
    if (!paymentExists) {
        throw new Error('Not valid input: Payment does not exist');
    }

    // If all pass then proceed
    console.log('Success: All inputs are valid');
    next();
});

module.exports = mongoose.model("Transaction", transactionSchema);
