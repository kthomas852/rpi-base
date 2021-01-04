const express = require('express');
global.Promise = require('bluebird');
const path = require('path');
const app = global.app = express();
const PORT = process.env.PORT || 8088;

// Setup require helper
global.app_require = function (name) {
    return require(__dirname.replace(/\\/g, '/') + '/' + name);
};

require('./routes')(app);

app.listen(PORT, ()=>console.log(`Server listening on ${PORT}!`));