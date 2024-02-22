/*Express js is a popular web application framework for Node.js
It provides a set of features for web application and mobile applications, 
including routing, middleware support, template engines, and more.*/
const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contect', (req, res) =>  {
    res.send('contect page');

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})