define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: app.baseUrl + '/users.json',
    paramRoot: 'user',

    defaults: {
      "email": "",
      "password": "",
      "password_confirmation": ""
    }

  });
  return SignIn;
});