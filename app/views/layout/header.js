define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var Header = Backbone.View.extend({
    template: "header",
    tagName: "header",

    initialize:function() {
      console.log('header');
    },
    serialize: function() {
      var context = context || {};
      // context.header = app.headerTitle;

    }
  });
  return Header;
});