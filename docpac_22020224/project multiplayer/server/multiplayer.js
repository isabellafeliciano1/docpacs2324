const io = require('socket.io');
const express = require('express');
const app = express();
const socket = io();

app.listen(3000, (err) => {
    if (err) {
    console.log('Server is running on port 3000');
    }
})
