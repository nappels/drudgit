define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var Header = Backbone.View.extend({
    template: "header",

    initialize:function() {
      console.log('header');
    }
  });
  return Header;
});