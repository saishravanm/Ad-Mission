// Raj Thapa
// User model used for user authentication

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const date = new Date();
const standarduserSchema = mongoose.Schema({
    userEmail: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    addressStreet: {
        type: String
    },
    addressCity: {
        type: String
    },
    addressState: {
        type: String
    },
    addressZIP: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
    isOrganizer: {
        type: Boolean
    }

});

standarduserSchema.pre("save", async function (next) {
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

module.exports = mongoose.model("User", standarduserSchema);