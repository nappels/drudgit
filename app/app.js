define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var _ = require("underscore");
  var $ = require("jquery");
  var Backbone = require("backbone");
  var Layout = require("layoutmanager");

  // Templates
  var templatePath = "app/templates/";
  var JST = window.JST = window.JST || {};

  //Manage views with backbone.layoutmanager
  Backbone.Layout.configure({ 
  	manage: true,
  	fetchTemplate: function(path) {
      // Append the file extension.
      path = templatePath + path + ".html";
      if (!JST[path]) {
        // Fetch it asynchronously if not available from JST, ensure that
        // template requests are never cached and prevent global ajax event
        // handlers from firing.
        $.ajax({
          url: path,
          dataType: "text",
          cache: false,
          async: false,

          success: function(contents) {
            JST[path] = _.template(contents);
          }
        });
      }
      return JST[path];
    }
   });

  // Alias the module for easier identification.
  var app = module.exports;

  // The root path to run the application through.
  app.root = "/";

  app.baseUrl = 'http://localhost:3000';
  


});
