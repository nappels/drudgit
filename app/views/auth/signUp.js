define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var SignUp = Backbone.View.extend({
    template: "signUp",
    el:"#body",

    events: {
      "click": "ajax"
    },

    initialize:function() {
      // this.model.fetch({type: "POST", dataType: "jsonp"});
      // console.log(this.model.toJSON());
    },

    ajax: function() {
      $.ajax({
        url: "http://localhost:3000/users.json",
        type: "POST",
        dataType: "jsonp",
        data: {
          "username": "nappel",
          "password": "123123123",
          "password_confirmation": "123123123"
        }
      });
    }

  });
  return SignUp;
});