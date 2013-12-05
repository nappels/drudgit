define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var SignIn = Backbone.View.extend({
    template: "signIn",
    el:"#body",

    initialize:function() {
      this.model.fetch();
    }
  });
  return SignIn;
});