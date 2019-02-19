const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const errController = require('./controllers/error');

const app = express();

//defining the login page
const loginRoutes = require('./routes/login');
//defining the page after login
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('views', 'views');


//setting up homepage which is login
app.use('/', loginRoutes);


//setting the dashboard page after login
app.use('/index',adminRoutes);


//app.use(errController.get404);

app.listen(3000);