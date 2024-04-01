//Vinay Verma (vxv220026)
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
        type: Boolean,
    },
    canManageUsers:{ //boolean for permissions to manage users
        type: Boolean,
    },
    organizerKey:{ //unique key for each organizer
        type: Number,
        unique: true,
    }
},
{
    disciminatorKey: 'userType', //differentiate between organizer and standard user
    timestamps: true,
});

organizerSchema.pre("save", async function (next) {
    if(this.organizationName == null){ //name test case
        throw new Error("Organization Name cannot be empty.");
    }
    if (this.organizationType == null){ //type test case
        throw new Error("Organization Type cannot be empty.");
    }
    if(this.organizationType != null && this.orgnizationName != null){ //if name and type are filled
        this.canCreateEvent = true; //organizer has been created and given permissons
        this.canManageUsers = true;
        const crypto = require('crypto');
        const hash = crypto.hash('sha256');
        hash.update(this.userEmail);
        this.organizerKey = hash.digest('hex'); //unique organizer identifier
        //write code to get a list of events from the database
    }
    else{ //invalid information provided, user is not an organizer
        this.canCreateEvent = false; 
        this.canManageUsers = false;
        this.organizerKey = 0;
    }
    next();
});
const organizer = standardUser.discriminator("organizer", organizerSchema); 
module.exports = organizer;
