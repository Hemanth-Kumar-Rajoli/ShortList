const express = require('express');
const cors = require("cors");
const crudRoutes = require('./Routes/CrudRouter');
const app = express();

app.use(cors());//Access-Control-Allow-Origin *

app.options('*',cors())

app.use(express.json());
//basic user routes
app.use("/user",new crudRoutes("Users").router);
//winners
app.use("/winner",new crudRoutes("Winners").router);

module.exports = app;