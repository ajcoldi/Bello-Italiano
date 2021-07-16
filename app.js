const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const pageRoutes = require('./routes/pageRoutes');
app.use('/', pageRoutes);
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(process.env.PORT || port, () => console.log(`Listening on port: ${port}`));