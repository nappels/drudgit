define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var SignIn = Backbone.View.extend({
    template: "signIn",
    el:"#body",

    events: {
      "click": "ajax"
    },

    initialize:function() {
      this.model.fetch({dataType: "jsonp"});
    },

    ajax: function() {
      var data = {

      };
      $.ajax({

      });
    }

  });
  return SignIn;
});