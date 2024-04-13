//Saishravan Muthukrishnan 
//import mongoose which will acts as our variable to reference the database 
const mongoose = require("mongoose");
//use bcrypt in case of encryption necessary
const bcrypt = require("bcrypt");
const User = require("../Models/usermodel.js");
const Seat = require("./seatmodel.js")
//Instantiate new "Date" object
const date = new Date();
//Create a new schema to be stored in the mongodb database
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
    associatedUsers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    seatNum:{
        type: Number
    },
    seatList:{
        type: [Seat.schema],
        required: true
    }
});

//This function runs before the "save" function is called. This is used to do any input validation to ensure that only valid parameters are passed to the event object before being stored in the database. 
eventSchema.pre("save",async function (next){
    const event = this
    //assign the userID of the caller to event.associatedUser
    for(let i = 0; i < event.seatNum; i++)
    {
        const s = new Seat;
        s.seatNum = i;
        s.row = 0;
        s.isFilled = false
        s.column = NULL
        event.seatList.push(s);
    }
    //check if the year, day, or month has passed for a newly created event
    if(event.eventDate.getFullYear() < date.getFullYear()) {
        throw new Error("Event Year has passed!")
        return next();
    }
    else if((event.eventDate.getFullYear() == date.getFullYear()) && ((event.eventDate.getMonth() < date.getMonth()) || event.eventDate.getDay() < date.getDay())) {
        throw new Error("Event Day/Month has passed!")
        return next();
    }

    //ensure that the name of the event is within a reasonable bounds of 5-20 characters
    if(event.eventName.length > 20 || event.eventName.length < 5)
    {
        throw new Error("Invalid Event Name! Either too long(Over 20 characters) or too short(less than 5)")
        return next();
    }
    //ensure that the description of the event is within a reasonable bounds of 1-250 characters
    if(event.eventDescription < 0 || event.eventDescription.length > 250)
    {
        throw new Error("Invalid Event Description! Either too long (over 250 characters) or too short (less than 5)")
        return next();
    }
    
})

//export the schema as an "Event" object 
module.exports = mongoose.model("Event",eventSchema);