const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
const Seat = require("../Models/seatmodel.js");
const bcrypt = require("bcrypt");

router.get("/", async(req, res) => {
    res.status(200).json({"test": "This is a test"});
})

router.get("/accountinfo/:useremail", async(req,res) => {
    const user = await User.findOne({
        userEmail: req.params.useremail
    });
    res.status(200).json({"userId":user.id, "userEmail":user.userEmail, "Phone Number":user.phoneNumber});
});

router.get("/get_event/:eventname"), async(req, res) =>{
    const event = await Event.findOne({
        eventName: req.params.eventName
    });
    res.status(200).json({"eventName":event.eventName,"eventDate":event.eventDate,"eventVenue":event.eventLocation,"eventTime":event.eventTime})
}

router.get('/getevents', async (req, res) => {
    try {
      var results = []
      const eventList = await Event.find({});
      res.json(eventList);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get("/get_seat/:seatNum"), async(req, res) =>{
    const seat = await Seat.findOne({
        seatNum: req.params.seatNum
    });
    res.status(200).json({"seatNum":seat.seatNum,"seatRow":seat.seatRow,"seatColumn":seat.seatColumn,"seatPrice":seat.seatPrice,"isFilled":seat.isFilled})
}

router.get('/getseats', async (req, res) => {
    try {  
      var results = []
      const seatList = await Seat.find({});
      res.json(seatList);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.post("/registration", async (req, res) => {
    await User.create({
        userEmail: req.body.userEmail,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    });
    res.status(200).json({"message": "User registered successfully!"});
});

router.post("/event_creation", async(req, res) => {
    await Event.create({
        eventName: req.body.eventName,
        eventLocation: req.body.eventLocation,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime,
        eventDescription: req.body.eventDescription,
    });
    res.status(200).json({"message": "Event created successfully!"})
})

router.post("/seat_reservation", async(req, res) => {
    await Seat.create({
        seatNum: req.body.seatName,
        seatRow: req.body.seatRow,
        seatColumn: req.body.seatColumn,
        seatPrice: req.body.seatPrice,
        isFilled: req.body.isFilled,
        associatedUser: req.body.associatedUser
    });
    res.status(200).json({"message": "Seat created successfully!"})
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ userEmail: req.body.userEmail });

        if (!user) {
            return res.status(400).json({ message: "Username/Password error!" });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (passwordMatch) {
            // Passwords match, user is authenticated
            return res.status(200).json({ message: "Logged in successfully!" });
        } else {
            // Passwords do not match
            return res.status(400).json({ message: "Username/Password error!" });
        }
    } catch (error) {
        // Handle other potential errors, e.g., database connection issues
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;