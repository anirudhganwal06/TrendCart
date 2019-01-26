const express = require('express');

const path = require('path');

const shopRoutes = require('./routes/shop.js');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(shopRoutes);

app.listen(3000);