define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var SignUp = Backbone.View.extend({
    template: "signUp",
    el:"#body",

    events: {
    },

    initialize:function() {
      this.model.fetch({type: "POST"});
      // console.log(this.model.toJSON());
    }

  });
  return SignUp;
});