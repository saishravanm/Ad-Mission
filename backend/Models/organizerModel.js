const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const standardUser = require("./standarduser.js");
const organizerSchema = mongoose.Schema({
    organizationName: {
        type: String,
        required: true
    },
    organizationType:{
        type: String,
        required: true
    },
    eventsOrganized:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Event'
    },
    // Add more organizer-specific fields as needed
});

organizerSchema.pre("save", async function (next) {
    if(this.organizationName == null){
        throw new Error("Organization Name cannot be empty.");
    }
    if (this.organizationType == null){
        throw new Error("Organization Type cannot be empty.");
    }
});
const organizer = standardUser.discriminator("organizer", organizerSchema);
module.exports = organizer;