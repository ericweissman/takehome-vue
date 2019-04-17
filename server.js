const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
require('dotenv').config();
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
console.log('SECRET_API_KEY: ', process.env.VUE_APP_APIKEY);
