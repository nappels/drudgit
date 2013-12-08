define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var Body = Backbone.View.extend({
    template: "body"
  });
  return Body;
});