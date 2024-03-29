const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
const Transaction = require("../Models/transactionmodel.js");
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
router.post("/create_transaction", async (req, res) => {
    try {
        const { user, payment, event, status } = req.body;
        const newTransaction = new Transaction({
            user,
            payment,
            event,
            status
        });

        await newTransaction.save(); // This will trigger pre-save validations
        res.status(201).json({"message": "Transaction created successfully!", "transaction": newTransaction});
    } catch (error) {
        console.error(error);
        res.status(400).json({"message": "Failed to create transaction", "error": error.message});
    }
});

// Get all transactions
router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find().populate(['user', 'payment', 'event']);
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Failed to fetch transactions", "error": error.message});
    }
});

// Get transactions by user
router.get("/transaction/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const transactions = await Transaction.find({ user: userId }).populate(['user', 'payment', 'event']);
        if (transactions.length > 0) {
            res.status(200).json(transactions);
        } else {
            res.status(404).json({"message": "No transactions found for the user"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Failed to fetch transactions", "error": error.message});
    }
});

module.exports = router;