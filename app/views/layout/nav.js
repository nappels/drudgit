define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Nav = Backbone.View.extend({
    template: "nav",

    initialize:function() {
      console.log('nav');
    }
  });
  return Nav;
});