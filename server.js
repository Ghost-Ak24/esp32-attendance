const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint for ESP32
app.post("/attendance", (req, res) => {
    console.log("Received RFID data:", req.body);
    res.json({ message: "Data received successfully", data: req.body });
});

// Test endpoint
app.get("/", (req, res) => {
    res.send("ESP32 Attendance API is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
