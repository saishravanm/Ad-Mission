const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
const Seat = require("../Models/seatmodel.js");
const Transaction = require("../Models/transactionmodel.js");
const bcrypt = require("bcrypt");

router.get("/", async(req, res) => {
    res.status(200).json({"test": "This is a test"});
})

// USER ROUTE SECTION

router.get("/accountinfo/:useremail", async(req,res) => {
    const user = await User.findOne({
        userEmail: req.params.useremail
    });
    res.status(200).json({"userId":user.id, "userEmail":user.userEmail, "Phone Number":user.phoneNumber});
});

//this function gets the user data based on their ID
router.post("/userData", async(req, res) => {
    const userID = req.query.userId;
    if (!userID) {
        return res.status(404).json({ error: "User not found" });
    }

    const user = await User.findOne({_id: userID});
    res.status(200).json({
        "userID": user._id, 
        "userEmail": user.userEmail, 
        "phoneNumber": user.phoneNumber,
        "addressStreet": user.addressStreet,
        "addressCity": user.addressCity,
        "addressState": user.addressState,
        "addressZip": user.addressZIP,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "birthday": user.birthday,
    });
});

//this function updates the users data.
router.put("/updateUser", async(req, res) => {
    try{
        const { id, firstName, lastName, email, phoneNumber, street, city, state, zip } = req.body;
        
        // Input validation
        if (!id) {
            return res.status(400).json({ error: "Please provide user ID" });
        }

        // Construct the update object dynamically
        const updateObject = {};
        if (firstName) updateObject.firstName = firstName;
        if (lastName) updateObject.lastName = lastName;
        if (email) updateObject.userEmail = email;
        if (phoneNumber) updateObject.phoneNumber = phoneNumber;
        if (street) updateObject.addressStreet = street;
        if (city) updateObject.addressCity = city;
        if (state) updateObject.addressState = state;
        if (zip) updateObject.addressZIP = zip;

        const user = await User.findOneAndUpdate(
            { "_id": id },
            { "$set": updateObject },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    }
    catch(error){
        console.error("Error updating user: ", error);
        res.status(500).json({error: 'Internal server error'});
    }
});

//RETURN SEAT
router.get("/get_seat/:seatNum"), async(req, res) =>{
    const seat = await Seat.findOne({
        seatNum: req.params.seatNum
    });
    res.status(200).json({"seatNum":seat.seatNum,"seatRow":seat.seatRow,"seatColumn":seat.seatColumn,"seatPrice":seat.seatPrice,"isFilled":seat.isFilled})
}
//RETURNS SEATS LIST
router.get('/getseats', async (req, res) => {
    try {  
      var results = []
      const seatList = await Seat.find({});
      res.json(seatList);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// this function registers the new user by adding info to the database (Raj Thapa)
router.post("/registration", async (req, res) => {
    try {
        // Extract user information from the request body
        const { userEmail, password, phoneNumber, addressStreet, addressCity, addressState, addressZIP, firstName, lastName, birthday, isOrganizer } = req.body;
        
        // Lookup if user already exists
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(400).json({ "error": "Username already exists" });
        }

        // Create the new user in the database
        await User.create({
            userEmail,
            password,
            phoneNumber,
            addressStreet,
            addressCity,
            addressState,
            addressZIP,
            firstName,
            lastName,
            birthday,
            isOrganizer
        });

        // Respond with success message
        return res.status(200).json({"message": "User registered successfully!"});
    } catch (error) {
        // If an error occurs during user registration, respond with an error message
        console.error(error);
        return res.status(500).json({"error": "An error occurred while registering the user."});
    }
});

// login function that finds the user by useremail, matches the password and returns if user login is successful (Raj Thapa)
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ userEmail: req.body.userEmail });

        if (!user) {
            return res.status(400).json({ message: "Username/Password error!" });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (passwordMatch) {
            // Passwords match, user is authenticated
            return res.status(200).json({userData: user, message: "Logged in successfully!" });
        } else {
            // Passwords do not match
            return res.status(400).json({ message: "Username/Password error!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Resets the password by finding user based on email (Raj Thapa)
router.post('/reset-password', async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findOne({ userEmail: req.body.userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isOldPasswordValid) {
      return res.status(400).json({ message: 'Incorrect old password' });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

//EVENT ROUTE SECTION
router.put("/reserve_seat/:eventName/:seatNum", async(req,res) =>{
    try{
        const event = await Event.findOne({eventName: req.params.eventName});
        const seatNum = req.params.seatNum;
        const seatList = event.seatList;
        for(var i in seatList)
        {
            var seat = seatList[i];
            if(seat.seatNum  == seatNum - 1)
            {
                seat.isFilled = true;
            }
        }
        event.seatList = seatList;
        //event.seatNum -=1;
        //console.log(event.seatList)
        const updated = await Event.findOneAndUpdate(
            {"eventName":req.params.eventName},
            {"$set":event},
            {new: true}
        );
        res.status(200).json({"message": "Seat reserved successfully!"})
        if(!event || !updated)
        {
            return res.status(400).json({ message: "Event not found!" });
        }
        
    } catch(error){
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/event_creation", async(req, res) => {
    try{
        const { eventName, eventLocation, eventDate, eventTime, eventDescription, seatNum} = req.body;
        const existingEvent = await Event.findOne({ eventName });
        if (existingEvent) {
             res.status(400).json({ "error": "Event already exists" });
        }
    await Event.create({
        eventName,
        eventLocation,
        eventDate,
        eventTime,
        eventDescription,
        seatNum
    });
    
     res.status(200).json({"message": "Event created successfully!"})
    }
    catch(error){
        console.error(error);
         res.status(500).json({"error": "An error occurred while creating the event."});
    }
})

router.get('/getevents', async (req, res) => {
    try {  
      var results = []
      const eventList = await Event.find({});
      res.json(eventList);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

router.get('/getevent/:eventName', async(req, res) =>{
    try {
        const event = await Event.findOne({ eventName: req.params.eventName });
        if (!event) {
            return res.status(400).json({ message: "Event not found!" });
        }
        res.json(event)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/get_transactions/:userEmail", async (req, res) => {
    try {
        const transactions = await Transaction.find({ userEmail: req.params.userEmail });
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/create_transactions", async (req, res) => {
    try {
        await Transaction.create({
            userEmail: req.body.userEmail, 
            eventName: req.body.eventName,
            eventDate: new Date(),
            seatNumber: req.body.seatNumber,
            amount: req.body.amount
        });

        res.status(200).json({ message: "Transaction created successfully!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;