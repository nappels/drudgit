define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Layout = require("modules/layout/baseView");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      var layout = new Layout();
      layout.render();
    }
  });
});
