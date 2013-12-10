define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var User = Backbone.Model.extend({
    url: '/api/users/active',

    defaults: {
      active: false,
      id: ""
    }
  });
  return User;
});