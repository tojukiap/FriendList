const express = require('express');
const app = express();
const port = 4000

const FriendList = require('./models/FriendList');

app.use(express.json());

app.get('/friends' , (req, res) => {
    res.status(200).json(FriendList)
});

app.listen(port, () => {
    console.log(`Server is listneing at http://localhost:${port}`)
});