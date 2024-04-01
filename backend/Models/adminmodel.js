const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the base User schema
const userSchema = mongoose.Schema({
    userEmail: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
});

// Add pre-save hook to hash password before saving
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

// Define the Administrator schema inheriting from the User schema
const administratorSchema = userSchema.clone();
administratorSchema.add({
    canCreateEvent: {
        type: Boolean,
        default: false
    },
    canManageUsers: {
        type: Boolean,
        default: false
    }
});

// Create the Administrator model
const Administrator = mongoose.model("Administrator", administratorSchema);

module.exports = Administrator;