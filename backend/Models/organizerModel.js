const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const organizerSchema = mongoose.Schema({
    organizationName: {
        type: String,
        required: true
    },
    organizationType: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    website: {
        type: String
    },
    contactPerson: {
        type: String
    }
    // Add more organizer-specific fields as needed
});
organizerSchema.pre("save", async function (next) {
    const organizer = this;
    if (!organizer.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(organizer.password, salt);
        organizer.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("Organizer", organizerSchema);