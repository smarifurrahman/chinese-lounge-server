const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('chinese lounge server is running..');
});

app.listen(port, () => {
    console.log(`chinese lounge api is running on port: ${port}`);
})
