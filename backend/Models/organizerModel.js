const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const standardUser = require("./standarduser.js");

const organizerSchema = mongoose.Schema({
    organizationName: { //holds organization name
        type: String,
        required: true
    },
    organizationType:{ //holds organization type
        type: String,
        required: true
    },
    eventsOrganized:{ //holds list of events organized by user 
        type: [mongoose.Schema.Types.ObjectID],
        ref: 'eventSchema' //reference eventSchema to get data
    },
    canCreateEvent:{ //boolean for permissions to create event
        type: true,
    },
    canManageUsers:{ //boolean for permissions to manage users
        type: true,
    }
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
