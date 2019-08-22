// Attach $ and jQuery to the global object (window).
// No need to require jQuery in individual modules.
window.$ = window.jQuery = require('jquery');
// Attach Underscore to the global object (window).
window._ = require('underscore');
// Attach Backbone to the global object (window) and extend it with jQuery.
window.Backbone = require('backbone');
window.Backbone.$ = window.$;
// Attach Marionette to the global object (window).
window.Marionette = require('backbone.marionette');
