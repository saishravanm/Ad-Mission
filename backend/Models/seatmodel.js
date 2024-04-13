const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const seatSchema = mongoose.Schema({
    seatNum: {
        type: Number
    },
    seatRow: {
        type: String 
    },
    //Whether seat is available or not
    seatColumn:{
        type: Number
    },
    seatPrice:{
        type: Number
    },
    isFilled:{
        type: Boolean
        
    },
    associatedUser:{
        type: String
    }
});

seatSchema.pre("save",async function (next){
    const seat = this
    if(seat.associatedUser==null){
        throw new Error("Seat must require an associated user!")
        return next();
    }
})

module.exports = mongoose.model("Seat", seatSchema);