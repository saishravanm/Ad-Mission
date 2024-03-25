const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
        type: Number
    },
    id: {
        type: Number
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

module.exports = mongoose.model("standarduser", userSchema);