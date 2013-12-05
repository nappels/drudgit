define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: '/api/users/sign_in',
    paramRoot: 'user',

    defaults: {
      "email": "noah.appel@gmail.com",
      "password": "123123123"
    }

  });
  return SignIn;
});