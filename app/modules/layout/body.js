define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var Body = Backbone.View.extend({
    template: "body",

    initialize:function() {
      console.log('body');
    }
  });
  return Body;
});