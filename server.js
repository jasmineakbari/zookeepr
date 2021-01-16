const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;

// Initiates server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

// adds api routes anytimes navigating to localhost/api and routes to html if '/'
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// gives access to all assets i.e. css and js pages in public dir
app.use(express.static('public'));

// enables server to listen for requests should always be at the very bottom of js file
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});