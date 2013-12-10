define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Nav = Backbone.View.extend({
    template: "nav"
  });
  return Nav;
});