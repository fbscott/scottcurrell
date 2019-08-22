'use strict';

require('./appDependencies.js');

var app = require('./app.js');

$(document).ready(function() {
    app.start();
    console.log('start.js');
});
