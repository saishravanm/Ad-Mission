const express = require("express");
const router = express.Router();
const User = require("../Models/usermodel.js");
const Event = require("../Models/eventmodel.js");
const bcrypt = require("bcrypt");
const Transaction = require("../Models/transactionmodel.js"); // Adjust path as necessary

// Get all transactions for the logged-in user
router.get("/get_transactions", getUser, async (req, res) => {
    try {
        const transactions = await Transaction.find({ userEmail: req.user.email });
        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ message: "No transactions found for this user." });
        }
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Create a new transaction
router.post("/create_transactions", async (req, res) => {
    try {
        if (!req.body.eventName || !req.body.eventLocation || !req.body.eventDate || !req.body.seatNumber || !req.body.amount) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        await Transaction.create({
            userEmail: req.body.userEmail, // Assuming userEmail is available in user details
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            eventDate: req.body.eventDate,
            seatNumber: req.body.seatNumber,
            amount: req.body.amount
        });

        res.status(200).json({ message: "Transaction created successfully!", transaction: savedTransaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
