const express = require("express");
const app = express();

app.use(express.json());

app.post("/activate", (req, res) => {
    const { telegramId, ip } = req.body;

    console.log("Telegram:", telegramId);
    console.log("IP:", ip);

    res.json({
        success: true,
        message: "Activated"
    });
});

app.listen(3000);