const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
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

// this function registers the new user by adding info to the database (Raj Thapa)
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
            return res.status(200).json({ message: "Logged in successfully!" });
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

    //Compares the old and new password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedNewPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;