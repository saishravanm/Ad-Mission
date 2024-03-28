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
    id: {
        type: Number
    }

});

standarduserSchema.pre("save", async function (next) {
    const user = this;
    if(date.getFullYear() - user.birthday.getFullYear == 18)
    {
        if(date.getMonth() - user.birthday.getMonth() < 0)
        {
            throw new Error("Must be 18 or older to create account");
        }
        else if(date.getMonth() - user.birthday.getMonth() == 0)
        {
            if(date.getDay()- user.birthday.getDay() < 0)
            {
                throw new Error("Must be 18 or older to create account");
            }   
        }
    }
    else if(date.getFullYear() - user.birthday.getFullYear < 18)
    {
        throw new Error("Must be 18 or older to create account");
    }
    if(user.firstName == null)
    {
        throw new Error("First name can not be empty");
    }
    if(user.lastName == null)
    {
        throw new Error("Last name can not be empty");
    }
    if(user.addressStreet == null)
    {
        throw new Error("Address can not be empty");
    }
    if(user.addressCity == null)
    {
        throw new Error("City can not be empty");
    }
    if(user.addressState == null)
    {
        throw new Error("State can not be empty");
    }
    if(user.addresszZIP == 'undefined')
    {   
        throw new Error("ZIP can not be empty");
    }
    if((String(user.phoneNumber).trim()).length !== 10)
    {
        throw new Error("Phone number invalid");
    }
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

module.exports = mongoose.model("standarduser", standarduserSchema);