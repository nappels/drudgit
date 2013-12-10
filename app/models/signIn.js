define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: '/api/users/sign_in',

    defaults: {
      user: {
        email: "",
        password: "",
        remember_me: ""
      }
    }

  });
  return SignIn;
});