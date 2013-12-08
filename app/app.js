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

  // app.baseUrl = 'http://localhost:3000';

  //subRoute helper
  app.SubRoute = Backbone.Router.extend({
    constructor: function(prefix) {
      var routes = {};
 
      // Prefix is optional, set to empty string if not passed
      prefix = prefix || "";
 
      // Allow for optionally omitting trailing /.  Since base routes do not
      // trigger with a trailing / this is actually kind of important =)
      if (prefix[prefix.length-1] == "/") {
        prefix = prefix.slice(0, prefix.length-1);
 
      // If a prefix exists, add a trailing /
      } else if (prefix) {
        prefix += "/";
      }
 
      // Every route needs to be prefixed
      _.each(this.routes, function(callback, path) {
        if (path) {
          return routes[prefix + path] = callback;
        }
 
        // If the path is "" just set to prefix, this is to comply
        // with how Backbone expects base paths to look gallery vs gallery/
        routes[prefix] = callback;
      });
 
      // Must override with prefixed routes
      this.routes = routes;
 
      // Required to have Backbone set up routes
      Backbone.Router.prototype.constructor.call(this);
    }
  });
  


});
