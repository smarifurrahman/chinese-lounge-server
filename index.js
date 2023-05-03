const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('chinese lounge server is running..');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = chefs.find(chef => chef.id === id);
    res.send(selectedRecipes);
})

app.listen(port, () => {
    console.log(`chinese lounge api is running on port: ${port}`);
})
