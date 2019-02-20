const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const errController = require('./controllers/error');

const app = express();

const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
app.use(express.static(path.join(__dirname, 'assets')));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use(loginRoutes);
app.use(authRoutes);
app.use(errController.get404);

app.listen(3000);