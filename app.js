const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const app = express();

app.use(bodyParser.json());

app.use('/users', routes.users);
db.sequelize.sync();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('express mysql boilerplate')
})