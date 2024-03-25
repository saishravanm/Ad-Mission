const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
const bcrypt = require("bcrypt");
const standarduser = require("../Models/standarduser.js");

router.get("/", async(req, res) => {
    res.status(200).json({"test": "This is a test"});
})

router.get("/accountinfo/:useremail", async(req,res) => {
    const user = await User.findOne({
        userEmail: req.params.useremail
    });
    res.status(200).json({"userId":user.id, "userEmail":user.userEmail, "Phone Number":user.phoneNumber});
});

router.post("/registration", async (req, res) => {
    await User.create({
        userEmail: req.body.userEmail,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    });
    res.status(200).json({"message": "User registered successfully!"});
});

router.get("/accountinfo/:useremail", async(req,res) => {
    const user = await standarduser.findOne({
        userEmail: req.params.useremail
    });
    res.status(200).json({"userId":user.id, "userEmail":user.userEmail, "Phone Number":user.phoneNumber, "Birthday":user.birthday, "Address Street":user.addressStreet, "Address City":user.addressCity, "Address State":user.addressState, "Address ZIP":user.addressZIP});
});

router.post("/registration/standarduser", async (req, res) => {
    await standarduser.create({
        userEmail: req.body.userEmail,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        birthday: req.body.birthday,
        addressStreet: req.body.addressStreet,
        addressCity: req.body.addressCity,
        addressState: req.body.addressState,
        addressZIP: req.body.addressZIP,
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