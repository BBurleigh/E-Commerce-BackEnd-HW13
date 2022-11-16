// start here --> where everything is called

const express = require('express');
const routes = require('./routes');
// import sequelize connection --> coming from connection.js 
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// middle ware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
