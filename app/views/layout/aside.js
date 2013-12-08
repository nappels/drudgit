define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Aside = Backbone.View.extend({
    template: "aside"
  });
  return Aside;
});