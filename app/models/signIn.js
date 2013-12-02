define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: app.baseUrl + '/users/sign_in.json',
    paramRoot: 'user',

    defaults: {
      "email": "noah.appel@gmail.com",
      "password": "123123123"
    }

  });
  return SignIn;
});