const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const User = require("../Models/usermodel.js");
const date = new Date();
const eventSchema = mongoose.Schema({
    eventName: {
        type: String
    },
    eventLocation: {
        type: String
    },
    //MM - DD - YYYY
    eventDate:{
        type: Date
    },
    eventTime:{
        type: String
    },
    eventDescription:{
        type: String
    },
    associatedUser:{
        type: String
    }
});

eventSchema.pre("save",async function (next){
    const event = this
    //assign the userID of the caller to event.associatedUser
    
    if(event.eventDate.getFullYear() < date.getFullYear()) {
        throw new Error("Event Year has passed!")
        return next();
    }
    else if((event.eventDate.getFullYear() == date.getFullYear()) && ((event.eventDate.getMonth() < date.getMonth()) || event.eventDate.getDay() < date.getDay())) {
        throw new Error("Event Day/Month has passed!")
        return next();
    }
    
})

module.exports = mongoose.model("Event",eventSchema);