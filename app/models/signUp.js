define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: '/api/users.json',
    paramRoot: 'user',

    defaults: {
      "email": "noah.appel@gmail.com",
      "password": "123123123",
      "password_confirmation": "123123123"
    }

  });
  return SignIn;
});