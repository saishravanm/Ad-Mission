const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const seatSchema = mongoose.Schema({
    seatRow: {
        type: String
    },
    seatColumn: {
        type: Number 
    },
    //Available or not
    isFilled:{
        type: Boolean
    },
    seatNum:{
        type: Number
    },
    seatPrice:{
        type: Number
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