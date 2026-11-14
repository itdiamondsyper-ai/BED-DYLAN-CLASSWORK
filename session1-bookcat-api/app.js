const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

app.get('/about', (req, res) => {
  res.send("Hey, I'm Dylan. When I'm not in class I'm usually playing football or working on my Roblox games. This is my first time building a server with Node and Express, so I'm still figuring it out as I go.");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
