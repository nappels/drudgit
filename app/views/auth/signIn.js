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

    ajax: function() {
      var data = {

      };
      $.ajax({

      });
    },

    initialize:function() {
      console.log('signIn');
    }
  });
  return SignIn;
});