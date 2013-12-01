define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Layout = require("views/layout/baseView");
  var SignIn = require("views/auth/signIn");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index",
      "signin": "signIn"
    },

    initialize: function() {
      var layout = new Layout();
      layout.render();
    },

    index: function() {
      
    },

    signIn: function() {
      new SignIn().render();
    }
  });
});
