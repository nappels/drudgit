define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var User = Backbone.Model.extend({
    url: '/api/admin/users.json',

    defaults: {
      email: "",
      gravatarUrl: ""
    }
  });
  return User;
});