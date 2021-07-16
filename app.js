const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const pageRoutes = require('./routes/pageRoutes');
app.use('/', pageRoutes);

app.listen(process.env.PORT || port, () => console.log(`Listening on port: ${port}`));