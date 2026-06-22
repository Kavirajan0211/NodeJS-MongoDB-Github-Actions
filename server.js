require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const User = require('./models/User');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Register
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = new User({
            username,
            password
        });

        await user.save();

        res.redirect('/success.html');
    } catch (err) {
        console.log(err);
        res.redirect('/failure.html');
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            username,
            password
        });

        if (user) {
            res.redirect('/success.html');
        } else {
            res.redirect('/failure.html');
        }

    } catch (err) {
        console.log(err);
        res.redirect('/failure.html');
    }
});

// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
